import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarProductoSucursalComponent } from './buscar-producto-sucursal.component';

describe('BuscarProductoSucursalComponent', () => {
  let component: BuscarProductoSucursalComponent;
  let fixture: ComponentFixture<BuscarProductoSucursalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarProductoSucursalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarProductoSucursalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
