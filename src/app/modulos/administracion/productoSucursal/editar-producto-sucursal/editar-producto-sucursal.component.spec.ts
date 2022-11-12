import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarProductoSucursalComponent } from './editar-producto-sucursal.component';

describe('EditarProductoSucursalComponent', () => {
  let component: EditarProductoSucursalComponent;
  let fixture: ComponentFixture<EditarProductoSucursalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarProductoSucursalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarProductoSucursalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
