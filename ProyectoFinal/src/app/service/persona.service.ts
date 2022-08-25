import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  perURL = 'https://backendtorres.herokuapp.com/personas/'

  constructor(private httpClient: HttpClient) { }

  
  public listar():Observable<Persona[]>{
    
    return this.httpClient.get<Persona[]>(this.perURL + 'listar');
  }

  public detalle(id: number): Observable<Persona>{

    return this.httpClient.get<Persona>(this.perURL + `detalle/${id}`);
  }

  public crear(persona: Persona):Observable<any>{

    return this.httpClient.post<any>(this.perURL + 'crear', persona);
  }

  public editar(id: number, persona: Persona):Observable<any>{

    return this.httpClient.put<any>(this.perURL + `editar/${id}`, persona);
  }

  public borrar(id: number): Observable<any>{

    return this.httpClient.delete<any>(this.perURL + `borrar/${id}`);
  }


}
