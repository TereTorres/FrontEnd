import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonaService } from 'src/app/service/persona.service';
import { Persona } from 'src/app/model/persona';

@Component({
  selector: 'app-editar-persona',
  templateUrl: './editar-persona.component.html',
  styleUrls: ['./editar-persona.component.css']
})
export class EditarPersonaComponent implements OnInit {

 
  personas : Persona = null;

  constructor(private personaService: PersonaService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    const id = this.activatedRouter.snapshot.params['id_Persona'];
    this.personaService.detalle(id).subscribe(
      data =>{
        this.personas = data;
      },err =>{
        alert("Error al editar la persona, necesita permiso de Administrador");
        this.router.navigate(['']);
      }
    )

  }

  onUpdate(): void{

    const id = this.activatedRouter.snapshot.params['id_Persona'];
    this.personaService.editar(id, this.personas).subscribe(
      data =>{
        this.router.navigate(['']);
      }, err =>{
        alert("Error al editar la persona");
        this.router.navigate(['']);
      }
    )
  }

}
