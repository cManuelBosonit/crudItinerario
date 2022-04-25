import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Error404Component } from './shared/error404/error404.component';

const routes: Routes = [
  {path:'', component: HomeComponent, pathMatch: 'full'},
  {path: '**', component: Error404Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
