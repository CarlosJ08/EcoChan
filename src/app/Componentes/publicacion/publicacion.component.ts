import { Component, OnInit,Input } from '@angular/core';
import {Publicaciones } from '../../Publicaciones';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {Respuestas} from '../../Respuestas';
import { UsuarioIniciado } from 'src/app/UsuarioIniciado';
import { RespuestasService } from 'src/app/respuestas.service';
@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css']
})
 
export class PublicacionComponent implements OnInit {
  lista:any;
@Input()item:Publicaciones;
Recortado:String='';
 Respuesta:Respuestas;
  constructor(private modalService: NgbModal, private service:RespuestasService){}
    ngOnInit(): void {
   
this.Recortado=this.item.Mensaje;
if(this.Recortado.length>15){
  this.Recortado=this.Recortado.substring(0,100)+"...";
  }
  this.Listar();
    }
  
  openScrollableContent(longContent) {
    this.modalService.open(longContent, { scrollable: true,size:'xl' });
  }

  Responder() {
    this.Respuesta= new Respuestas(1,this.item.IdPublicacion,UsuarioIniciado.Usuario.idUsuario,(document.getElementById("Mensaje") as HTMLInputElement).value,UsuarioIniciado.Usuario.Nombre+" "+ UsuarioIniciado.Usuario.Apellidos,null);
    this.service.Responder(this.Respuesta).subscribe(datos => {
      this.Listar();
    });}

    Listar(){
      this.service.Listar(this.item.IdPublicacion).subscribe(Respuesta => {this.lista=Respuesta; console.log(Respuesta);$( "#ListaRes" ).load(window.location.href + " #ListaRes" );})
}
}
