import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPublicacionComponent } from './modal-publicacion.component';

describe('ModalPublicacionComponent', () => {
  let component: ModalPublicacionComponent;
  let fixture: ComponentFixture<ModalPublicacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalPublicacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPublicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
