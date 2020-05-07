import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { NPublicacionComponent } from 'src/app/Componentes/npublicacion/npublicacion.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './Componentes/home/home.component';
const routes: Routes = [
  {path: '', component: HomeComponent},
 {path: 'Registro', component: NPublicacionComponent}
 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
