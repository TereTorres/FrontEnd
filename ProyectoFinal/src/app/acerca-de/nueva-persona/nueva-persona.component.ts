import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-nueva-persona',
  templateUrl: './nueva-persona.component.html',
  styleUrls: ['./nueva-persona.component.css']
})
export class NuevaPersonaComponent implements OnInit {

  id_Persona?: number;
  nombre: string = '';
  img: string = '';
  acerca_de: string = '';

  constructor(private personaService: PersonaService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{

    const persona = new Persona(this.nombre, this.img, this.acerca_de);
    this.personaService.crear(persona).subscribe(
      data => {alert("Persona añadida con éxito");
      this.router.navigate(['']);
    }, err =>{
      alert("El intento falló, necesita permiso de Administrador");
      this.router.navigate(['']);
    }
    )
  }
}
