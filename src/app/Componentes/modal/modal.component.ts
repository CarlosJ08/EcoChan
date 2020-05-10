import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {Publicaciones} from '../../Publicaciones';
import { UsuarioIniciado } from 'src/app/UsuarioIniciado';
import {PublicacionService} from '../../publicacion.service'
import {HomeComponent} from '../home/home.component';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit{
  Publicacion:Publicaciones;
  constructor(private modalService: NgbModal,private service:PublicacionService,private Home:HomeComponent) { }
  closeResult='';

  
ngOnInit():void{
  if(UsuarioIniciado.Usuario==null)
    {
      document.getElementById("btn").setAttribute("style","display:inline-block");
      
    }else{
        document.getElementById("btn").setAttribute("style","display:none");
     
    }
}
  Publicar() {
    this.Publicacion=  new Publicaciones(1,UsuarioIniciado.Usuario.idUsuario,(document.getElementById("Titulo") as HTMLInputElement).value,(document.getElementById("Mensaje") as HTMLInputElement).value,UsuarioIniciado.Usuario.Nombre+" "+ UsuarioIniciado.Usuario.Apellidos,(document.getElementById("Categoria") as HTMLInputElement).value);
    this.service.AgregarPublicacion(this.Publicacion).subscribe(datos => {
      if(datos==null)
      {

      }
      {
        this.Home.Listar();
        this.modalService.dismissAll();
      }
    });}

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
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
