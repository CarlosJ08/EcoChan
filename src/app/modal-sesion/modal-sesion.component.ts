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

  constructor(private modalService: NgbModal,private service:UsuariosService) { }
  closeResult='';
  UsuarioIniciado:Usuarios=new Usuarios(null,null,null,null,null,null);
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
    this.service.Sesion(Usuario).subscribe(result => Usuario= result[0]);
    if(this.UsuarioIniciado.Nombre!=null)
    {
      this.modalService.dismissAll();
      UsuarioIniciado.Usuario=this.UsuarioIniciado;
      console.log(UsuarioIniciado.Usuario.Nombre);
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

  ngOnInit(): void {
  }

}
