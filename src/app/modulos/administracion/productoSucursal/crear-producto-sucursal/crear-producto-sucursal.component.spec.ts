import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearProductoSucursalComponent } from './crear-producto-sucursal.component';

describe('CrearProductoSucursalComponent', () => {
  let component: CrearProductoSucursalComponent;
  let fixture: ComponentFixture<CrearProductoSucursalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearProductoSucursalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearProductoSucursalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
