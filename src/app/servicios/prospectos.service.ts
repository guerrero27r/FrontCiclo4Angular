import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloProspectos } from '../modelos/prospectos.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root',
})
export class ProspectosService {
  url = 'http://localhost:3000';
  token: string = '';

  constructor(
    private Htpp: HttpClient,
    private seguridadServicio: SeguridadService
  ) {
    this.token = this.seguridadServicio.ObtenerToken();
  }

  ObtenerRegistrosProspectos(): Observable<ModeloProspectos[]> {
    return this.Htpp.get<ModeloProspectos[]>(`${this.url}/prospectos`, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`,
      }),
    });
  }

  ObtenerRegistrosProspectosPorId(id: string): Observable<ModeloProspectos> {
    return this.Htpp.get<ModeloProspectos>(`${this.url}/prospectos/${id}`, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`,
      }),
    });
  }

  CrearProspecto(mascota: ModeloProspectos): Observable<ModeloProspectos> {
    return this.Htpp.post<ModeloProspectos>(`${this.url}/prospectos`, mascota, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`,
      }),
    });
  }

  ActualizarProspecto(mascota: ModeloProspectos): Observable<ModeloProspectos> {
    return this.Htpp.put<ModeloProspectos>(
      `${this.url}/prospectos/${mascota.id}`,
      mascota,
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.token}`,
        }),
      }
    );
  }

  EliminarProspecto(id: string): Observable<any> {
    return this.Htpp.delete(`${this.url}/prospectos/${id}`, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`,
      }),
    });
  }
}
