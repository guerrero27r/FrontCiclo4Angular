import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ModeloIdentificar } from 'src/app/modelos/identificar.modelo';
import { ModeloCambioClave } from '../modelos/cambioClave.modelo';
import { ModeloRecuperarClave } from '../modelos/recuperarClave.modelo';

@Injectable({
  providedIn: 'root',
})
export class SeguridadService {
  url = 'http://localhost:3000';
  token: string = '';
  datosUsuarioSesion = new BehaviorSubject<ModeloIdentificar>(
    new ModeloIdentificar()
  );

  constructor(private http: HttpClient) {
    this.VerificarSesionActual();
    this.ObtenerToken();
  }

  VerificarSesionActual() {
    let datos = this.ObtenerInformacionSesion();
    if (datos) {
      this.RefrescarDatosSesion(datos);
    }
  }

  RefrescarDatosSesion(datos: ModeloIdentificar) {
    this.datosUsuarioSesion.next(datos);
  }

  ObtenerDatosUsuarioSesion() {
    return this.datosUsuarioSesion.asObservable();
  }

  Identificar(
    Usuario: string,
    Contrasena: string
  ): Observable<ModeloIdentificar> {
    return this.http.post<ModeloIdentificar>(
      `${this.url}/identificarPersona`,
      {
        Usuario: Usuario,
        Contrasena: Contrasena,
      },
      {
        headers: new HttpHeaders(),
      }
    );
  }

  CambiarClave(
    id_usuario: string,
    Clave_actual: string,
    Nueva_clave: string
  ): Observable<ModeloCambioClave> {
    return this.http.post<ModeloCambioClave>(
      `${this.url}/cambiar-contrasena`,
      {
        id_usuario: id_usuario,
        Clave_actual: Clave_actual,
        Nueva_clave: Nueva_clave,
      },
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.ObtenerToken()}`,
        }),
      }
    );
  }

  RecuperarClave(Correo: string): Observable<ModeloRecuperarClave> {
    return this.http.post<ModeloRecuperarClave>(
      `${this.url}/recuperar-contrasena`,
      { Correo: Correo },
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.ObtenerToken()}`,
        }),
      }
    );
  }

  AlmacenarSesion(datos: ModeloIdentificar) {
    datos.estaIdentificado = true;
    let stringDatos = JSON.stringify(datos);
    localStorage.setItem('datosSesion', stringDatos);
    this.RefrescarDatosSesion(datos);
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

  obteneridSesion(): string {
    let datosString = localStorage.getItem('datosSesion');
    if (datosString) {
      let datos = JSON.parse(datosString);
      return datos.datos.id;
    } else {
      return '';
    }
  }

  EliminarInformacionSesion() {
    localStorage.removeItem('datosSesion');
    this.RefrescarDatosSesion(new ModeloIdentificar());
  }

  SesionIniciada() {
    let datosString = localStorage.getItem('datosSesion');
    return datosString;
  }

  ObtenerToken() {
    let datosString = localStorage.getItem('datosSesion');
    if (datosString) {
      let datos = JSON.parse(datosString);
      return datos.tk;
    } else {
      return '';
    }
  }
}
