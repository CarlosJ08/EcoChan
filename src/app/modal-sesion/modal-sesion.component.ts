import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { UsuariosService } from '../usuarios.service';
import { Usuarios } from '../Usuarios'
import { UsuarioIniciado } from '../UsuarioIniciado';
import {HomeComponent} from '../Componentes/home/home.component';
@Component({
  selector: 'app-modal-sesion',
  templateUrl: './modal-sesion.component.html',
  styleUrls: ['./modal-sesion.component.css']
})

export class ModalSesionComponent implements OnInit {
  public Dat: any = null;
  txt: String = '';
  ngOnInit(): void {

    if (UsuarioIniciado.Usuario == null) {
      document.getElementById("btnI").setAttribute("style", "display:inline-block");
      document.getElementById("btnRegistro").setAttribute("style", "display:inline-block");
      document.getElementById("UsIniciado").setAttribute("style", "display:none");
    } else {
      document.getElementById("btnI").setAttribute("style", "display:none");
      document.getElementById("btnRegistro").setAttribute("style", "display:none");
      document.getElementById("UsIniciado").setAttribute("style", "display:inline-block");
      this.txt = UsuarioIniciado.Usuario.Nombre;
    }
  }
  constructor(private modalService: NgbModal, private service: UsuariosService, private home:HomeComponent) {

  }
  closeResult = '';
  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  Iniciar() {
    if((document.getElementById("Correo") as HTMLInputElement).value.trim()==''|| (document.getElementById("Contraseña") as HTMLInputElement).value.trim()==''){}
    else{
    var Usuario = {
      Correo: (document.getElementById("Correo") as HTMLInputElement).value,
      Contrasena: (document.getElementById("Contraseña") as HTMLInputElement).value
    }
    this.service.Sesion(Usuario).subscribe(Respuesta => {
    this.Dat = Respuesta; console.log(Respuesta);
      UsuarioIniciado.Usuario = new Usuarios(Number(this.Dat["idUsuario"]), this.Dat["Nombre"], this.Dat["Apellidos"], this.Dat["Correo"], this.Dat["Carrera"], this.Dat["Contrasena"]);
      console.log(UsuarioIniciado.Usuario);
      console.log(UsuarioIniciado.Usuario["idUsuario"]);
      localStorage.setItem('Sesion', JSON.stringify(UsuarioIniciado.Usuario));
      this.Verificar();
    });
  }
  }
  Verificar() {

    if (UsuarioIniciado.Usuario.idUsuario == null) {
      document.getElementById("valid").setAttribute("style", "display:inline-block");
    }
    else {
      location.reload();
      document.getElementById("valid").setAttribute("style", "display:none");
      this.modalService.dismissAll();

      console.log("Usuario Iniciado:" + UsuarioIniciado.Usuario.Nombre);
    }
  }
  Cerrar() {
    this.modalService.dismissAll();
  }
  CerrarSesion()
  {
    localStorage.setItem('Sesion',null);
    location.reload();
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }



}
