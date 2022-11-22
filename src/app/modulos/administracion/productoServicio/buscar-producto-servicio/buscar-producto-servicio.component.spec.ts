import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarProductoServicioComponent } from './buscar-producto-servicio.component';

describe('BuscarProductoServicioComponent', () => {
  let component: BuscarProductoServicioComponent;
  let fixture: ComponentFixture<BuscarProductoServicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarProductoServicioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarProductoServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
