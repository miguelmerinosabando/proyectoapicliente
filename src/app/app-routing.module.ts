import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProyectoListComponent } from './proyecto-list/proyecto-list.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path:'proyectos-list',
    component: ProyectoListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
