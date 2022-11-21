import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloIdentificar } from 'src/modelos/identificar.modelo';

@Injectable({
  providedIn: 'root',
})
export class SeguridadService {
  url = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  Identificar(Usuario: string, Clave: string): Observable<ModeloIdentificar> {
    return this.http.post<ModeloIdentificar>(
      `${this.url}/identificarPersona`,
      {
        Usuario: Usuario,
        Clave: Clave,
      },
      {
        headers: new HttpHeaders(),
      }
    );
  }
}
