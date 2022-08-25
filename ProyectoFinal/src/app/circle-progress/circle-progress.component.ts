import { Component, OnInit } from '@angular/core';
import { Hysskills } from '../model/hysskills';
import { HysskillsService } from '../service/hysskills.service';
import { TokenService } from '../service/token.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmacionComponent } from '../confirmacion/confirmacion.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-circle-progress',
  templateUrl: './circle-progress.component.html',
  styleUrls: ['./circle-progress.component.css']
})
export class CircleProgressComponent implements OnInit {

  hys: Hysskills[] = [];

  constructor(private hysskillsService: HysskillsService, private tokenSercive: TokenService, public dialogo: MatDialog, private router: Router) {}
   
  isLogged = false;
  
  ngOnInit(): void {
 
    this.cargarHys();
    if(this.tokenSercive.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  cargarHys(): void{

    this.hysskillsService.listar().subscribe(data => {this.hys = data;})
  }
 
  delete(id_Hys?: number){
    if(id_Hys != undefined){
      this.hysskillsService.borrar(id_Hys).subscribe(
        data => {
          this.cargarHys();
        }, err =>{
          alert("No es posible borrar la habilidad seleccionada, necesita permiso de Administrador");
        }
      )
    }
  }

  mostrarDialogo(id_Hys?: number): void {
    this.dialogo
      .open(ConfirmacionComponent, {
        data: `¿Confirma la eliminación?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (confirmado) {
          this.delete(id_Hys);
        } else {
          this.router.navigate(['']);
        }
      });
  }
}
