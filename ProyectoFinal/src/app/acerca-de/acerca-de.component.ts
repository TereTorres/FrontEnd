import { Component, OnInit } from '@angular/core';
import { Persona } from '../model/persona';
import { PersonaService } from '../service/persona.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  personas: Persona[] = [];
  
  constructor(private personaService: PersonaService, private tokenService: TokenService) { }

  vacio = true;
  isLogged = false;

  ngOnInit(): void {

    this.cargarPersona();
    if(this.personas===[]){
      this.vacio = true;
    }else{
      this.vacio = false;
    }
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else {
      this.isLogged = false;
    }
  }

  cargarPersona(): void{

    this.personaService.listar().subscribe(data => {this.personas = data;})
  }

  delete(id_Persona?: number){

    if(id_Persona != undefined){
      this.personaService.borrar(id_Persona).subscribe(
        data => {
          this.cargarPersona();
        }, err =>{
          alert("No es posible borrar la persona seleccionada, necesita permiso de Administrador");
        }
      )
    }
  } 
}
