import { Component, OnInit } from '@angular/core';
import { Persona } from '../../interfaces/persona.inteface';

const personasMock: Persona[] = [
  {id:1, name: 'Man', password: 'seguro', email:'mh@company.com', subscribed: true,
  country: 'Spain', city:'Madrid'},
  {id:2, name: 'Jul', password: 'segurorisimo', email:'jh@company.com', subscribed: false,
  country: 'Portugal', city:'Oporto'},
]

@Component({
  selector: 'app-listado-personas',
  templateUrl: './listado-personas.component.html',
  styleUrls: ['./listado-personas.component.css']
})
export class ListadoPersonasComponent implements OnInit {

  displayedColumns: string[] = ['name', 'email', 'subscribed', 'country', 'city']
  dataSource = personasMock;

  constructor() { }

  ngOnInit(): void {
  }

}
