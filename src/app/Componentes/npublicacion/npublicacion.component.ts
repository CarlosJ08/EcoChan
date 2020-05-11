import { Component, OnInit } from '@angular/core';
import { Usuarios } from '../../Usuarios';
import { UsuariosService } from '../../usuarios.service';
import { UsuarioIniciado } from '../../UsuarioIniciado';
import { HttpClient } from '@angular/common/http';
import {HomeComponent} from '../home/home.component';
import { FormBuilder, FormGroup } from '@angular/forms';
declare function require(name: string);
var Query = require('../../Querys');
@Component({
  selector: 'app-npublicacion',
  templateUrl: './npublicacion.component.html',
  styleUrls: ['./npublicacion.component.css']
})
export class NPublicacionComponent implements OnInit {
home:HomeComponent;
txt:String;
Prueba:String="Zopilote.jpg";
model=1;
  constructor(private service: UsuariosService ) { }
  Usuario: Usuarios;


  ngOnInit(): void {
    
  }

  recuperarTodos() {

  }

  alta() {

 
  
  var imagen:String="";
 
    if ((document.getElementById("Nombre") as HTMLInputElement).value == '' || (document.getElementById("Apellidos") as HTMLInputElement).value == '' || (document.getElementById("Correo") as HTMLInputElement).value == '') { document.getElementById("Advertencia").setAttribute("style", "display:flex"); }
    else {
      if((document.getElementById("r1") as HTMLInputElement).checked){imagen="Zopilote.jpg"}
      if((document.getElementById("r2") as HTMLInputElement).checked){imagen="gruya.jpg"}
      if((document.getElementById("r3") as HTMLInputElement).checked){imagen="arbol.jpg"}

      this.Usuario = new Usuarios(1, (document.getElementById("Nombre") as HTMLInputElement).value, (document.getElementById("Apellidos") as HTMLInputElement).value, (document.getElementById("Correo") as HTMLInputElement).value, (document.getElementById("Carrera") as HTMLInputElement).value, (document.getElementById("Contraseña") as HTMLInputElement).value,imagen);
      this.service.AgregarUsuario(this.Usuario).subscribe(datos => {
        
         
        location.href="/";
      });
      
    }
  }
 
}





