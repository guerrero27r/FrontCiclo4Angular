import { Component, OnInit } from '@angular/core';
import { ModeloSucursales } from 'src/app/modelos/sucursales.modelo';
import { SucursalesService } from 'src/app/servicios/sucursales.service';

@Component({
  selector: 'app-buscar-sucursal',
  templateUrl: './buscar-sucursal.component.html',
  styleUrls: ['./buscar-sucursal.component.css'],
})
export class BuscarSucursalComponent implements OnInit {
  ListadoRegistrosSucursal: ModeloSucursales[] = [];

  constructor(private sucursalesServicio: SucursalesService) {}

  ngOnInit(): void {
    this.ObtenerListadoSucursales();
  }

  ObtenerListadoSucursales() {
    this.sucursalesServicio
      .ObtenerRegistrosSucursales()
      .subscribe((datos: ModeloSucursales[]) => {
        this.ListadoRegistrosSucursal = datos;
      });
  }
}
