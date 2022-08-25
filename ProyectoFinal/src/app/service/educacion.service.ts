import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  eduURL = 'https://backendtorres.herokuapp.com/educacion/'

  constructor(private httpClient: HttpClient) { }

  public listar():Observable<Educacion[]>{
    
    return this.httpClient.get<Educacion[]>(this.eduURL + 'listar');
  }

  public detalle(id: number): Observable<Educacion>{

    return this.httpClient.get<Educacion>(this.eduURL + `detalle/${id}`);
  }

  public crear(educacion: Educacion):Observable<any>{

    return this.httpClient.post<any>(this.eduURL + 'crear', educacion);
  }

  public editar(id: number, educacion: Educacion):Observable<any>{

    return this.httpClient.put<any>(this.eduURL + `editar/${id}`, educacion);
  }

  public borrar(id: number): Observable<any>{

    return this.httpClient.delete<any>(this.eduURL + `borrar/${id}`);
  }

}
