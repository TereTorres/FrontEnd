import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyectos } from '../model/proyectos';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  proyURL = 'https://backendtorres.herokuapp.com/proyectos/'

  constructor(private httpClient: HttpClient) { }

  
  public listar():Observable<Proyectos[]>{
    
    return this.httpClient.get<Proyectos[]>(this.proyURL + 'listar');
  }

  public detalle(id: number): Observable<Proyectos>{

    return this.httpClient.get<Proyectos>(this.proyURL + `detalle/${id}`);
  }

  public crear(proyecto: Proyectos):Observable<any>{

    return this.httpClient.post<any>(this.proyURL + 'crear', proyecto);
  }

  public editar(id: number, proyecto: Proyectos):Observable<any>{

    return this.httpClient.put<any>(this.proyURL + `editar/${id}`, proyecto);
  }

  public borrar(id: number): Observable<any>{

    return this.httpClient.delete<any>(this.proyURL + `borrar/${id}`);
  }


}
