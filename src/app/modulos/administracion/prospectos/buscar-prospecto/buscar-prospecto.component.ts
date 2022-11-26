import { Component, OnInit } from '@angular/core';
import { ModeloProspectos } from 'src/app/modelos/prospectos.modelo';
import { ProspectosService } from 'src/app/servicios/prospectos.service';

@Component({
  selector: 'app-buscar-prospecto',
  templateUrl: './buscar-prospecto.component.html',
  styleUrls: ['./buscar-prospecto.component.css'],
})
export class BuscarProspectoComponent implements OnInit {
  ListadoRegistrosProspectos: ModeloProspectos[] = [];

  constructor(private prospectoServicio: ProspectosService) {}

  ngOnInit(): void {
    this.ObtenerListadoProductos();
  }

  ObtenerListadoProductos() {
    this.prospectoServicio
      .ObtenerRegistrosProspectos()
      .subscribe((datos: ModeloProspectos[]) => {
        this.ListadoRegistrosProspectos = datos;
      });
  }
}
