import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { EmailValidatorService } from 'src/app/shared/validator/email-validator.service';
import { ValidatorService } from 'src/app/shared/validator/validator.service';
import { PersonasService } from '../../services/persona.service';


@Component({
  selector: 'app-formulario-personas',
  templateUrl: './formulario-personas.component.html',
  styleUrls: ['./formulario-personas.component.css']
})
export class FormularioPersonasComponent implements OnInit {

  paises: string[] = ["España", "EEUU", "Francia", "Egipto", "México", "Portugal", "Italia", "China", "Japón", "Australia", "Gran Bretaña", "Escocia", "Irlanda"];

  @Output() onRefesh = new EventEmitter()

  miFormulario: FormGroup = this.fb.group({
    id: [],
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)],[this.emailValidator]],
    password: ['', [Validators.required, Validators.minLength(5)]],
    password2: ['', [Validators.required]],
    subscribed: [],
    country: ['',[Validators.required]],
    city: ['',[Validators.required]]
  }, {
    validators: [ this.validatorService.camposIguales('password', 'password2')],
  });

  get emailErrorMsg(): string{
    const errors = this.miFormulario.get('email')?.errors;
    if(errors?.['required']) {
      return 'Email es obligatorio';
    }else if(errors?.['pattern']) {
      return 'El valor ingresado no tiene formato de correo'
    }else if (errors?.['emailTomado']){
      return 'El email ya fue tomado'
    }
    return ''
  }

  personaDetalle: any;

  constructor(
    private personaService:PersonasService,
    private fb:FormBuilder,
    private validatorService: ValidatorService,
    private emailValidator: EmailValidatorService) { }

    ngOnInit(): void {

      this.miFormulario.reset({
      nombre: '',
      email: '',
      userName: '',
      password: '',
      password2: '',
      subscribed: false
      })
    }

    campoNoValido(campo: string){
    return this.miFormulario.get(campo)?.invalid
    && this.miFormulario.get(campo)?.touched;
    }

    submitFormulario(){
    console.log(this.miFormulario);
    this.miFormulario.markAllAsTouched();
    }

    postForm(){
      this.personaService.addPersona(this.miFormulario.getRawValue())
      .subscribe( data => {
        this.onRefesh.emit();
      });    
    }

}
