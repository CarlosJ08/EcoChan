import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {UsuariosService} from '../usuarios.service';
import {Usuarios} from '../Usuarios'
import {UsuarioIniciado} from '../UsuarioIniciado'
@Component({
  selector: 'app-modal-sesion',
  templateUrl: './modal-sesion.component.html',
  styleUrls: ['./modal-sesion.component.css']
})

export class ModalSesionComponent implements OnInit {
  public Dat: any = null;
  ngOnInit(): void {
  
  }
  constructor(private modalService: NgbModal,private service:UsuariosService) { }
  closeResult='';
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  Iniciar()
  {
   
    var Usuario={
      Correo:(document.getElementById("Correo") as HTMLInputElement).value,
      Contrasena: (document.getElementById("Contraseña") as HTMLInputElement).value
    }
    this.service.Sesion(Usuario).subscribe(Respuesta => {this.Dat=Respuesta; console.log(Respuesta);
      UsuarioIniciado.Usuario=new Usuarios(Number(this.Dat["idUsuario"]),this.Dat["Nombre"],this.Dat["Apellidos"],this.Dat["Correo"],this.Dat["Carrera"],this.Dat["Contrasena"]); 
         console.log(UsuarioIniciado.Usuario);
      console.log(UsuarioIniciado.Usuario["idUsuario"]);
      localStorage.setItem('Sesion', JSON.stringify(UsuarioIniciado.Usuario));
    this.Verificar();
  });
  
  }
  Verificar()
  {
 
    if(UsuarioIniciado.Usuario.idUsuario==null)
    {

    }
    else{
      this.modalService.dismissAll();
      console.log("Usuario Iniciado:"+UsuarioIniciado.Usuario.Nombre);
    }
  }
  Cerrar(){
    this.modalService.dismissAll();
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
