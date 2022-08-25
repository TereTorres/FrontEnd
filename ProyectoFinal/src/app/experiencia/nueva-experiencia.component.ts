import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Experiencia} from '../model/experiencia';
import { ExperienciaService } from '../service/experiencia.service';

@Component({
  selector: 'app-nueva-experiencia',
  templateUrl: './nueva-experiencia.component.html',
  styleUrls: ['./nueva-experiencia.component.css']
})
export class NuevaExperienciaComponent implements OnInit {

  id_Experiencia?: number;
  nombreExp: string = '';
  anioIngreso: string = '';
  anioEgreso: string = '';
  cargoExp: string = '';
  descripcionExp: string = '';

  constructor(private experienciaService: ExperienciaService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{

    const expe = new Experiencia(this.nombreExp, this.anioIngreso, this.anioEgreso,
      this.cargoExp, this.descripcionExp);
    this.experienciaService.crear(expe).subscribe(
      data => { alert("Experiencia añadida con éxito");
      this.router.navigate(['']);
    }, err =>{
      alert("El intento falló, necesita permiso de Administrador");
      this.router.navigate(['']);
    })
  }

}
