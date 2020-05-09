import { Component, OnInit } from '@angular/core';
import {UsuarioIniciado} from '../../UsuarioIniciado';
import {Publicaciones} from '../../Publicaciones';
import {PublicacionService} from '../../publicacion.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
lista:any;

  constructor(private service:PublicacionService) {
    console.log("Entro");
        this.Listar();
        console.log("Salio");
     }

  ngOnInit(): void {
    
    if(localStorage.getItem('Sesion')==null)
    {

    }
    else{
      UsuarioIniciado.Usuario=JSON.parse(localStorage.getItem('Sesion'));
    }
  }

  Listar(){
  this.service.Listar().subscribe(Respuesta => {this.lista=Respuesta; console.log(Respuesta);$( "#ListaPub" ).load(window.location.href + " #ListaPub" );})
}

}
