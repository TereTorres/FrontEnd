import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-nuevo-nivel',
  templateUrl: './nuevo-nivel.component.html',
  styleUrls: ['./nuevo-nivel.component.css']
})
export class NuevoNivelComponent implements OnInit {

  id_Educacion?: number;
  nivel: string = '';
  institucion: string = '';
  titulo: string = '';

  constructor(private educacionService: EducacionService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate():void{

    const edu = new Educacion(this.nivel, this.institucion, this.titulo);

    this.educacionService.crear(edu).subscribe(
      data => {alert("Nivel añadido con éxito");
      this.router.navigate(['']);
    }, err => {
      alert("El intento falló, necesita permiso de Administrador");
      this.router.navigate(['']);
    }

    )
  }
}
