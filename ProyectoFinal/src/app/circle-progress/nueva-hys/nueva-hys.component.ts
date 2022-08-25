import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hysskills } from 'src/app/model/hysskills';
import { HysskillsService } from 'src/app/service/hysskills.service';

@Component({
  selector: 'app-nueva-hys',
  templateUrl: './nueva-hys.component.html',
  styleUrls: ['./nueva-hys.component.css']
})
export class NuevaHysComponent implements OnInit {

  id_Hys?: number;
  percent: number;
  title: string;

  constructor(private HysService: HysskillsService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate():void{

    const hys = new Hysskills(this.percent, this.title);

    this.HysService.crear(hys).subscribe(
      data => {alert("Nivel añadido con éxito");
      this.router.navigate(['']);
    }, err => {
      alert("El intento falló, necesita permiso de Administrador");
      this.router.navigate(['']);
    }

    )
  }


}
