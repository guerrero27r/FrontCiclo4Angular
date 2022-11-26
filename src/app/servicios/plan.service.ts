import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloPlan } from '../modelos/plan.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root',
})
export class PlanService {
  url = 'http://localhost:3000';
  token: string = '';

  constructor(
    private Htpp: HttpClient,
    private seguridadServicio: SeguridadService
  ) {
    this.token = this.seguridadServicio.ObtenerToken();
  }

  ObtenerRegistrosPlan(): Observable<ModeloPlan[]> {
    return this.Htpp.get<ModeloPlan[]>(`${this.url}/plans`);
  }

  ObtenerRegistrosPlanPorId(id: string): Observable<ModeloPlan> {
    return this.Htpp.get<ModeloPlan>(`${this.url}/plans/${id}`);
  }

  CrearPlan(producto: ModeloPlan): Observable<ModeloPlan> {
    return this.Htpp.post<ModeloPlan>(`${this.url}/plans`, producto, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`,
      }),
    });
  }

  ActualizarPlan(plan: ModeloPlan): Observable<ModeloPlan> {
    return this.Htpp.put<ModeloPlan>(`${this.url}/plans/${plan.id}`, plan, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`,
      }),
    });
  }

  EliminarPlan(id: string): Observable<any> {
    return this.Htpp.delete(`${this.url}/plans/${id}`, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`,
      }),
    });
  }
}
