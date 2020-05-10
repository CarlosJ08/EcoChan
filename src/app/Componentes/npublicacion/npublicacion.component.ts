import { Component, OnInit } from '@angular/core';
import { Usuarios } from '../../Usuarios';
import { UsuariosService } from '../../usuarios.service';
import { UsuarioIniciado } from '../../UsuarioIniciado';
import { HttpClient } from '@angular/common/http';
import {HomeComponent} from '../home/home.component';
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
  constructor(private service: UsuariosService, ) { }
  Usuario: Usuarios;


  ngOnInit(): void {

  }

  recuperarTodos() {

  }

  alta() {
  this.txt='/Registro';
    if ((document.getElementById("Nombre") as HTMLInputElement).value == '' || (document.getElementById("Apellidos") as HTMLInputElement).value == '' || (document.getElementById("Correo") as HTMLInputElement).value == '') { document.getElementById("Advertencia").setAttribute("style", "display:flex"); }
    else {
      this.Usuario = new Usuarios(1, (document.getElementById("Nombre") as HTMLInputElement).value, (document.getElementById("Apellidos") as HTMLInputElement).value, (document.getElementById("Correo") as HTMLInputElement).value, (document.getElementById("Carrera") as HTMLInputElement).value, (document.getElementById("Contraseña") as HTMLInputElement).value);
      this.service.AgregarUsuario(this.Usuario).subscribe(datos => {
        
      });
      this.txt='/';
    }
  }
 
}





