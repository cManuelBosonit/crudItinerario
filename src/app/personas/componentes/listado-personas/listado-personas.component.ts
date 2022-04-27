import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
  personaDetalle : any;
  @Output() disparadorDetalle: EventEmitter<any> = new EventEmitter();

  constructor( private personaService:PersonasService ) { }

onRefresh(){
  this.personaService.getAllPersonas()
      .subscribe(data => {
        this.personas = data;
      })
}

  ngOnInit(): void {
    this.onRefresh()
  }

  edit( id: number ){
    this.personaService.getPersonaById(id)
      .subscribe(data => {
        this.personaDetalle = data;
        this.disparadorDetalle.emit(this.personaDetalle);
      })
    
  }

  delete(id: number){
    this.personaService.deleteById(id)
    .subscribe( data => {
      this.onRefresh();
    })
}

}
