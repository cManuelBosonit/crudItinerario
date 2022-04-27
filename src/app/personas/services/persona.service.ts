import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../interfaces/persona.inteface';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  url:string = "http://localhost:3000";

  @Output() disparadorDetalle: EventEmitter<any> = new EventEmitter();

  constructor( private http:HttpClient) { }

  getAllPersonas():Observable<Persona[]>{
    const completeUrl = `${this.url}/personas`;
    return this.http.get<Persona[]>(completeUrl); 
  }

  getPersonaById(id: number):Observable<Persona>{
    const completeUrl = `${this.url}/personas/${id}`;
    return this.http.get<Persona>(completeUrl); 
  }

  deleteById(id: number):Observable<Persona[]>{
    const completeUrl = `${this.url}/personas/${id}`
    return this.http.delete<Persona[]>(completeUrl); 
  }


}
