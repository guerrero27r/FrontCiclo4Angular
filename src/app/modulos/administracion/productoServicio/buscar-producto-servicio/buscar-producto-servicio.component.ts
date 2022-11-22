import { Component, OnInit } from '@angular/core';
import { ModeloProducto } from 'src/app/modelos/productoServicio.modelo';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-buscar-producto-servicio',
  templateUrl: './buscar-producto-servicio.component.html',
  styleUrls: ['./buscar-producto-servicio.component.css'],
})
export class BuscarProductoServicioComponent implements OnInit {
  ListadoRegistros: ModeloProducto[] = [];

  constructor(private productoServicio: ProductoService) {}

  ngOnInit(): void {
    this.ObtenerListadoProductos();
  }

  ObtenerListadoProductos() {
    this.productoServicio
      .ObtenerRegistros()
      .subscribe((datos: ModeloProducto[]) => {
        this.ListadoRegistros = datos;
      });
  }
}
