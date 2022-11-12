import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarProductoSucursalComponent } from './eliminar-producto-sucursal.component';

describe('EliminarProductoSucursalComponent', () => {
  let component: EliminarProductoSucursalComponent;
  let fixture: ComponentFixture<EliminarProductoSucursalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarProductoSucursalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarProductoSucursalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
