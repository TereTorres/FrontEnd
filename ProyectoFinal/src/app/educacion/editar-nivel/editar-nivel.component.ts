import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-editar-nivel',
  templateUrl: './editar-nivel.component.html',
  styleUrls: ['./editar-nivel.component.css']
})
export class EditarNivelComponent implements OnInit {

  edu : Educacion = null;

  constructor(private educacionService: EducacionService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

    ngOnInit(): void {

      const id = this.activatedRouter.snapshot.params['id_Educacion'];
      this.educacionService.detalle(id).subscribe(
        data =>{
          this.edu = data;
        },err =>{
          alert("Error al editar el nivel, necesita permiso de Administrador");
          this.router.navigate(['']);
        }
      )
  }

  onUpdate(): void{

    const id = this.activatedRouter.snapshot.params['id_Educacion'];
    this.educacionService.editar(id, this.edu).subscribe(
      data =>{
        this.router.navigate(['']);
      }, err =>{
        alert("Error al editar el nivel, necesita permiso de Administrador");
        this.router.navigate(['']);
      }
    )
  }

}
