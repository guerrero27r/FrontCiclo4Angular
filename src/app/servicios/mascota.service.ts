import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloMascota } from '../modelos/mascota.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root',
})
export class MascotaService {
  url = 'http://localhost:3000';
  token: string = '';

  constructor(
    private Htpp: HttpClient,
    private seguridadServicio: SeguridadService
  ) {
    this.token = this.seguridadServicio.ObtenerToken();
  }

  ObtenerRegistrosMascota(): Observable<ModeloMascota[]> {
    return this.Htpp.get<ModeloMascota[]>(`${this.url}/mascotas`);
  }

  ObtenerRegistrosMascotaPorId(id: string): Observable<ModeloMascota> {
    return this.Htpp.get<ModeloMascota>(`${this.url}/mascotas/${id}`);
  }

  CrearMascota(mascota: ModeloMascota): Observable<ModeloMascota> {
    return this.Htpp.post<ModeloMascota>(`${this.url}/mascotas`, mascota, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`,
      }),
    });
  }

  ActualizarMascota(mascota: ModeloMascota): Observable<ModeloMascota> {
    return this.Htpp.put<ModeloMascota>(
      `${this.url}/mascotas/${mascota.id}`,
      mascota,
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.token}`,
        }),
      }
    );
  }

  EliminarMascota(id: string): Observable<any> {
    return this.Htpp.delete(`${this.url}/mascotas/${id}`, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`,
      }),
    });
  }
}
