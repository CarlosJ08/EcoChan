import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicacionComponent } from './Componentes/publicacion/publicacion.component';
import { NavbarComponent } from './Componentes/navbar/navbar.component';
import { JumbotronComponent } from './Componentes/jumbotron/jumbotron.component';
import { NPublicacionComponent } from './Componentes/npublicacion/npublicacion.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './Componentes/home/home.component';
import { FooterComponent } from './Componentes/footer/footer.component';
import { ModalComponent } from './Componentes/modal/modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {HttpClientModule} from '@angular/common/http';
import { UsuariosService } from './usuarios.service';
import { ModalSesionComponent } from './modal-sesion/modal-sesion.component';

@NgModule({
  declarations: [
    AppComponent,
    PublicacionComponent,
    NavbarComponent,
    JumbotronComponent,
    NPublicacionComponent,
    HomeComponent,
    FooterComponent,
    ModalComponent,
    ModalSesionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [UsuariosService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
