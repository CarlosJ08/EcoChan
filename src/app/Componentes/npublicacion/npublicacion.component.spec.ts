import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NPublicacionComponent } from './npublicacion.component';

describe('NPublicacionComponent', () => {
  let component: NPublicacionComponent;
  let fixture: ComponentFixture<NPublicacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NPublicacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NPublicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
