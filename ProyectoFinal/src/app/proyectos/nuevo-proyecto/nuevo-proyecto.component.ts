import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-nuevo-proyecto',
  templateUrl: './nuevo-proyecto.component.html',
  styleUrls: ['./nuevo-proyecto.component.css']
})
export class NuevoProyectoComponent implements OnInit {

  id_Proyecto?: number;
  titulo: string = '';
  descripcion: string = '';
  imagen: string = '';

  constructor(private proyectosService: ProyectosService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate():void{

    const proy = new Proyectos(this.titulo, this.descripcion, this.imagen);

    this.proyectosService.crear(proy).subscribe(
      data => {alert("Proyecto añadido con éxito");
      this.router.navigate(['']);
    }, err => {
      alert("El intento falló, necesita permiso de Administrador");
      this.router.navigate(['']);
    }
    )
  }

}
