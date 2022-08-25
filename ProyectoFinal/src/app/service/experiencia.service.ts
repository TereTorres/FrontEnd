import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  expURL = 'https://backendtorres.herokuapp.com/explab/'

  constructor(private httpClient: HttpClient) { }

  public listar():Observable<Experiencia[]>{
    
    return this.httpClient.get<Experiencia[]>(this.expURL + 'listar');
  }

  public detalle(id: number): Observable<Experiencia>{

    return this.httpClient.get<Experiencia>(this.expURL + `detalle/${id}`);
  }

  public crear(experiencia: Experiencia):Observable<any>{

    return this.httpClient.post<any>(this.expURL + 'crear', experiencia);
  }

  public editar(id: number, experiencia: Experiencia):Observable<any>{

    return this.httpClient.put<any>(this.expURL + `editar/${id}`, experiencia);
  }

  public borrar(id: number): Observable<any>{

    return this.httpClient.delete<any>(this.expURL + `borrar/${id}`);
  }
}
