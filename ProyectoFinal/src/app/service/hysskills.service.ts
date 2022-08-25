import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hysskills } from '../model/hysskills';

@Injectable({
  providedIn: 'root'
})
export class HysskillsService {

  hysURL = 'https://backendtorres.herokuapp.com/hys/'

  constructor(private httpClient: HttpClient) { }

  
  public listar():Observable<Hysskills[]>{
    
    return this.httpClient.get<Hysskills[]>(this.hysURL + 'listar');
  }

  public detalle(id: number): Observable<Hysskills>{

    return this.httpClient.get<Hysskills>(this.hysURL + `detalle/${id}`);
  }

  public crear(hys: Hysskills):Observable<any>{

    return this.httpClient.post<any>(this.hysURL + 'crear', hys);
  }

  public editar(id: number, hys: Hysskills):Observable<any>{

    return this.httpClient.put<any>(this.hysURL + `editar/${id}`, hys);
  }

  public borrar(id: number): Observable<any>{

    return this.httpClient.delete<any>(this.hysURL + `borrar/${id}`);
  }


}
