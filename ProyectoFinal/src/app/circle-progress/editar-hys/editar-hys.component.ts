import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hysskills } from 'src/app/model/hysskills';
import { HysskillsService } from 'src/app/service/hysskills.service';

@Component({
  selector: 'app-editar-hys',
  templateUrl: './editar-hys.component.html',
  styleUrls: ['./editar-hys.component.css']
})
export class EditarHysComponent implements OnInit {

  hys : Hysskills = null;

  constructor(private hysService: HysskillsService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id_Hys'];
      this.hysService.detalle(id).subscribe(
        data =>{
          this.hys = data;
        },err =>{
          alert("Error al editar el nivel, necesita permiso de Administrador");
          this.router.navigate(['']);
        }
      )
  }

  onUpdate(): void{

    const id = this.activatedRouter.snapshot.params['id_Hys'];
    this.hysService.editar(id, this.hys).subscribe(
      data =>{
        this.router.navigate(['']);
      }, err =>{
        alert("Error al editar el nivel, necesita permiso de Administrador");
        this.router.navigate(['']);
      }
    )
  }


}
