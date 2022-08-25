import { Component, OnInit } from '@angular/core';
import { Proyectos } from '../model/proyectos';
import { ProyectosService } from '../service/proyectos.service';
import { TokenService } from '../service/token.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmacionComponent } from '../confirmacion/confirmacion.component';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proy: Proyectos[] = [];

  constructor(private proyectosService: ProyectosService, private tokenService: TokenService, public dialogo: MatDialog, private router: Router) { }

  isLogged = false;

  ngOnInit(): void {

    this.cargarProyectos();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarProyectos(): void {

    this.proyectosService.listar().subscribe(data => { this.proy = data; })
  }

  delete(id_Proyecto?: number) {

    if (id_Proyecto != undefined) {
      this.proyectosService.borrar(id_Proyecto).subscribe(
        data => {
          this.cargarProyectos();
        }, err => {
          alert("No es posible borrar el proyecto seleccionado, necesita permiso de Administrador")
        }
      )
    }
  }

  mostrarDialogo(id_Proyecto?: number): void {
    this.dialogo
      .open(ConfirmacionComponent, {
        data: `¿Confirma la eliminación?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (confirmado) {
          this.delete(id_Proyecto);
        } else {
          this.router.navigate(['']);
        }
      });
  }

}