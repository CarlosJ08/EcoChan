import { Component, OnInit,Input } from '@angular/core';
import {Publicaciones } from '../../Publicaciones';
@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css']
})
 
export class PublicacionComponent implements OnInit {
@Input()item:Publicaciones;

  constructor() {console.log(this.item);}

  ngOnInit(): void {
  }

}
