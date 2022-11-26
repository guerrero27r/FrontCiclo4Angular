import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import { ModeloIdentificar } from 'src/app/modelos/identificar.modelo';

@Component({
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.css'],
})
export class BarraNavegacionComponent implements OnInit {
  sesion: boolean = false;

  subs: Subscription = new Subscription();

  constructor(private seguridadServicio: SeguridadService) {}

  ngOnInit(): void {
    this.subs = this.seguridadServicio
      .ObtenerDatosUsuarioSesion()
      .subscribe((datos: ModeloIdentificar) => {
        this.sesion = datos.estaIdentificado;
      });
  }
}
// https://github.com/guerrero27r
