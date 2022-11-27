import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloSucursales } from '../modelos/sucursales.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root',
})
export class SucursalesService {
  url = 'http://localhost:3000';
  token: string = '';

  constructor(
    private Htpp: HttpClient,
    private seguridadServicio: SeguridadService
  ) {
    this.token = this.seguridadServicio.ObtenerToken();
  }

  ObtenerRegistrosSucursales(): Observable<ModeloSucursales[]> {
    return this.Htpp.get<ModeloSucursales[]>(`${this.url}/sucursals`, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`,
      }),
    });
  }

  ObtenerRegistrosSucursalesPorId(id: string): Observable<ModeloSucursales> {
    return this.Htpp.get<ModeloSucursales>(`${this.url}/sucursals/${id}`, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`,
      }),
    });
  }

  CrearSucursal(mascota: ModeloSucursales): Observable<ModeloSucursales> {
    return this.Htpp.post<ModeloSucursales>(`${this.url}/sucursals`, mascota, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`,
      }),
    });
  }

  ActualizarSucursal(mascota: ModeloSucursales): Observable<ModeloSucursales> {
    return this.Htpp.put<ModeloSucursales>(
      `${this.url}/sucursals/${mascota.id}`,
      mascota,
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.token}`,
        }),
      }
    );
  }

  EliminarSucursal(id: string): Observable<any> {
    return this.Htpp.delete(`${this.url}/sucursals/${id}`, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`,
      }),
    });
  }
}
