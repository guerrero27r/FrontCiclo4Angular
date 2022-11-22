import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarProductoServicioComponent } from './eliminar-producto-servicio.component';

describe('EliminarProductoServicioComponent', () => {
  let component: EliminarProductoServicioComponent;
  let fixture: ComponentFixture<EliminarProductoServicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarProductoServicioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarProductoServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
