import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloProducto } from '../modelos/productoServicio.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  url = 'https://repositoriociclo4-production.up.railway.app/';
  token: string = '';

  constructor(
    private Htpp: HttpClient,
    private seguridadServicio: SeguridadService
  ) {
    this.token = this.seguridadServicio.ObtenerToken();
  }

  ObtenerRegistros(): Observable<ModeloProducto[]> {
    return this.Htpp.get<ModeloProducto[]>(`${this.url}/producto-servicios`, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`,
      }),
    });
  }

  ObtenerRegistrosPorId(id: string): Observable<ModeloProducto> {
    return this.Htpp.get<ModeloProducto>(
      `${this.url}/producto-servicios/${id}`,
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.token}`,
        }),
      }
    );
  }

  CrearProducto(producto: ModeloProducto): Observable<ModeloProducto> {
    return this.Htpp.post<ModeloProducto>(
      `${this.url}/producto-servicios`,
      producto,
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.token}`,
        }),
      }
    );
  }

  ActualizarProducto(producto: ModeloProducto): Observable<ModeloProducto> {
    return this.Htpp.put<ModeloProducto>(
      `${this.url}/producto-servicios/${producto.id}`,
      producto,
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.token}`,
        }),
      }
    );
  }

  EliminarProducto(id: string): Observable<any> {
    return this.Htpp.delete(`${this.url}/producto-servicios/${id}`, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`,
      }),
    });
  }
}
