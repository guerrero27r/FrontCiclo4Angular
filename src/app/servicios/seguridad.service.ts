import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ModeloIdentificar } from 'src/modelos/identificar.modelo';

@Injectable({
  providedIn: 'root',
})
export class SeguridadService {
  url = 'http://localhost:3000';
  datosUsuarioSesion = new BehaviorSubject<ModeloIdentificar>(
    new ModeloIdentificar()
  );

  constructor(private http: HttpClient) {
    this.VerificarSesionActual();
  }

  VerificarSesionActual() {
    let datos = this.ObtenerInformacionSesion();
    if (datos) {
      this.datosUsuarioSesion.next(datos);
    }
  }

  ObtenerDatosUsuarioSesion() {
    return this.datosUsuarioSesion.asObservable();
  }

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

  AlmacenarSesion(datos: ModeloIdentificar) {
    let stringDatos = JSON.stringify(datos);
    localStorage.setItem('datosSesion', stringDatos);
  }

  ObtenerInformacionSesion() {
    let datosString = localStorage.getItem('datosSesion');
    if (datosString) {
      let datos = JSON.parse(datosString);
      return datos;
    } else {
      return null;
    }
  }

  EliminarInformacionSesion() {
    localStorage.removeItem('datosSesion');
  }

  SesionIniciada() {
    let datosString = localStorage.getItem('datosSesion');
    return datosString;
  }
}
