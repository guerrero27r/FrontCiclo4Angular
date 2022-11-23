import { Component, OnInit } from '@angular/core';
import { ModeloUsuario } from 'src/app/modelos/crearUsuario.modelo';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-buscar-usuario',
  templateUrl: './buscar-usuario.component.html',
  styleUrls: ['./buscar-usuario.component.css'],
})
export class BuscarUsuarioComponent implements OnInit {
  ListadoRegistros: ModeloUsuario[] = [];

  constructor(private usuarioServicio: UsuarioService) {}

  ngOnInit(): void {
    this.ObtenerListadoUsuarios();
  }

  ObtenerListadoUsuarios() {
    this.usuarioServicio
      .ObtenerUsuarios()
      .subscribe((datos: ModeloUsuario[]) => {
        this.ListadoRegistros = datos;
      });
  }
}
