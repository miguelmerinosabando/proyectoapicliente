import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ProyectoListComponent } from './proyecto-list/proyecto-list.component';
import { ProyectoService } from './shared/services/proyecto.service';
import { ProyectoEditComponent } from './proyecto-edit/proyecto-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    RegistrationComponent,
    ProyectoListComponent,
    ProyectoEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    FormsModule,
    HttpModule
  ],
  providers: [ProyectoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
