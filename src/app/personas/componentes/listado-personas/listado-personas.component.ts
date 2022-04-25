import { Component, OnInit } from '@angular/core';
import { Persona } from '../../interfaces/persona.inteface';
import { PersonasService } from '../../services/persona.service';

@Component({
  selector: 'app-listado-personas',
  templateUrl: './listado-personas.component.html',
  styleUrls: ['./listado-personas.component.css']
})
export class ListadoPersonasComponent implements OnInit {

  displayedColumns: string[] = ['name', 'email', 'subscribed', 'country', 'city']
  personas: Persona[] = [];

  constructor( private personaSerice:PersonasService ) { }

  ngOnInit(): void {
    this.personaSerice.getAllPersonas()
      .subscribe(data => {
        this.personas = data;
      })
  }

}
