import { Component, OnInit } from '@angular/core';
import { Experiencia } from '../model/experiencia';
import { ExperienciaService } from '../service/experiencia.service';
import { TokenService } from '../service/token.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmacionComponent } from '../confirmacion/confirmacion.component';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  expe: Experiencia[] = [];

  constructor(private experienciaService: ExperienciaService, private tokenService: TokenService, public dialogo: MatDialog, private router: Router) { }

  isLogged = false;
  
  ngOnInit(): void {

    this.cargarExperiencia();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else {
      this.isLogged = false;
    }
  
  }

  cargarExperiencia(): void{

    this.experienciaService.listar().subscribe(data => {this.expe = data;})
  }

  delete(id_Experiencia?: number){

    if(id_Experiencia != undefined){
      this.experienciaService.borrar(id_Experiencia).subscribe(
        data => {
          this.cargarExperiencia();
        }, err =>{
          alert("No es posible borrar la experiencia seleccionada, necesita permiso de Administrador");
        }
      )
    }
  }

  
  mostrarDialogo(id_Experiencia?: number): void {
    this.dialogo
      .open(ConfirmacionComponent, {
        data: `¿Confirma la eliminación?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (confirmado) {
          this.delete(id_Experiencia);
        } else {
          this.router.navigate(['']);
        }
      });
  }
}

