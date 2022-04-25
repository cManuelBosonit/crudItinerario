import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../interfaces/persona.inteface';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  url:string = "http://localhost:3000"

  constructor( private http:HttpClient) { }

  getAllPersonas():Observable<Persona[]>{
    let completeUrl = `${this.url}/personas`;
    return this.http.get<Persona[]>(completeUrl); 
  }

}
