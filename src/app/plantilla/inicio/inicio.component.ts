import { Component, OnInit } from '@angular/core';
import { ModeloPlan } from 'src/app/modelos/plan.modelo';
import { ModeloProducto } from 'src/app/modelos/productoServicio.modelo';
import { PlanService } from 'src/app/servicios/plan.service';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  ListadoRegistros: ModeloProducto[] = [];
  ListadoRegistrosPlan: ModeloPlan[] = [];

  constructor(
    private productoServicio: ProductoService,
    private planServicio: PlanService
  ) {}

  ngOnInit(): void {
    this.ObtenerListadoProductos();
    this.ObtenerListadoPlanes();
  }

  ObtenerListadoProductos() {
    this.productoServicio
      .ObtenerRegistros()
      .subscribe((datos: ModeloProducto[]) => {
        this.ListadoRegistros = datos;
      });
  }

  ObtenerListadoPlanes() {
    this.planServicio
      .ObtenerRegistrosPlan()
      .subscribe((datos: ModeloPlan[]) => {
        this.ListadoRegistrosPlan = datos;
      });
  }
}
