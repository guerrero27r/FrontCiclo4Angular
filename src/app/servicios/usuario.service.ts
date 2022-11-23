import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloUsuario } from '../modelos/crearUsuario.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  url = 'http://localhost:3000';
  token: string = '';

  constructor(
    private Htpp: HttpClient,
    private seguridadServicio: SeguridadService
  ) {
    this.token = this.seguridadServicio.ObtenerToken();
  }

  ObtenerUsuarios(): Observable<ModeloUsuario[]> {
    return this.Htpp.get<ModeloUsuario[]>(`${this.url}/usuarios`);
  }

  ObtenerRegistrosUsuarioPorId(id: string): Observable<ModeloUsuario> {
    return this.Htpp.get<ModeloUsuario>(`${this.url}/usuarios/${id}`);
  }

  CrearUsuario(usuario: ModeloUsuario): Observable<ModeloUsuario> {
    return this.Htpp.post<ModeloUsuario>(`${this.url}/usuarios`, usuario, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`,
      }),
    });
  }

  ActualizarUsuario(usuario: ModeloUsuario): Observable<ModeloUsuario> {
    return this.Htpp.put<ModeloUsuario>(
      `${this.url}/usuarios/${usuario.id}`,
      usuario,
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.token}`,
        }),
      }
    );
  }

  EliminarUsuario(id: string): Observable<any> {
    return this.Htpp.delete(`${this.url}/usuarios/${id}`, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`,
      }),
    });
  }
}