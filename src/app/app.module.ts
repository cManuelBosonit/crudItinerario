import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';

import { HomeComponent } from './home/home.component';
import { Error404Component } from './shared/error404/error404.component'
import { ListadoPersonasComponent } from './personas/componentes/listado-personas/listado-personas.component';
import { FormularioPersonasComponent } from './personas/componentes/formulario-personas/formulario-personas.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Error404Component,
    ListadoPersonasComponent,
    FormularioPersonasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule,
    MatTableModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
