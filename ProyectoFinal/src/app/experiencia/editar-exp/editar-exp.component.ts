import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-editar-exp',
  templateUrl: './editar-exp.component.html',
  styleUrls: ['./editar-exp.component.css']
})
export class EditarExpComponent implements OnInit {

  expLab : Experiencia = null;

  constructor(private experienciaService: ExperienciaService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    const id = this.activatedRouter.snapshot.params['id_Experiencia'];
    this.experienciaService.detalle(id).subscribe(
      data =>{
        this.expLab = data;
      },err =>{
        alert("Error al editar la experiencia, necesita permiso de Administrador");
        this.router.navigate(['']);
      }
    )

  }

  onUpdate(): void{

    const id = this.activatedRouter.snapshot.params['id_Experiencia'];
    this.experienciaService.editar(id, this.expLab).subscribe(
      data =>{
        this.router.navigate(['']);
      }, err =>{
        alert("Error al editar la experiencia");
        this.router.navigate(['']);
      }
    )
  }
}
