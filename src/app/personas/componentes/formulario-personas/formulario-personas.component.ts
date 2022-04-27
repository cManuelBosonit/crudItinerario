import { Component, OnInit } from '@angular/core';
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

  miFormulario: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
     email: ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)],[this.emailValidator]],
    password: ['', [Validators.required, Validators.minLength(5)]],
    password2: ['', [Validators.required]],
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

    crearForm = new FormGroup({
      user: new FormControl(''),
      password: new FormControl(''),
      name: new FormControl(''),
      surname: new FormControl(''),
      companyEmail: new FormControl(''),
      personalEmail: new FormControl(''),
      city: new FormControl(''),
      activate: new FormControl(''),
      createdDate: new FormControl(''),
      imagenUrl: new FormControl(''),
      terminationDate: new FormControl(''),
    });


    ngOnInit(): void {
      this.personaService.disparadorDetalle.subscribe( data => {
        console.log('data detalle', data);
        this.personaDetalle = data;
      })

      this.miFormulario.reset({
      nombre: '',
      email: '',
      userName: '',
      password: '',
      password2: '',
      condiciones: false
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

}
