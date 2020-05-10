import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Publicaciones } from '../Publicaciones';
@Component({
  selector: 'app-modal-publicacion',
  templateUrl: './modal-publicacion.component.html',
  styleUrls: ['./modal-publicacion.component.css']
})
export class ModalPublicacionComponent implements OnInit {
  @Input() itemm: Publicaciones;
  closeResult: string;

  constructor(private modalService: NgbModal) { }

  openBackDropCustomClass(content) {
    this.modalService.open(content, { backdropClass: 'light-blue-backdrop' });
  }

  openWindowCustomClass(content) {
    this.modalService.open(content, { windowClass: 'dark-modal' });
  }


  openScrollableContent(longContent) {
    this.modalService.open(longContent, { scrollable: true });
  }

  ngOnInit(): void {
  }

}
