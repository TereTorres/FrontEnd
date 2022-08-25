import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NuevoUsuario } from 'src/app/model/nuevo-usuario';
import {AuthService} from 'src/app/service/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  id?: number;
  nombre: string = '';
  nombreUsuario: string = '';
  email: string = '';
  password: string = '';
  authorities: string []= [];
  rol: string = 'ROLE_USER';
  
  constructor(private authService: AuthService, private router: Router) { 
   
  }


  ngOnInit(): void {
  }

  
  onCreate():void{

    this.authorities.push(this.rol);
    const auth = new NuevoUsuario(this.nombre, this.nombreUsuario,
      this.email, this.password, this.authorities);
    

    this.authService.nuevo(auth).subscribe(
      data => {alert("Usuario añadido con éxito");
      this.router.navigate(['/login']);
    }, err => {
      alert("El intento falló");
      this.router.navigate(['/login']);
    }

    )
  }
}


