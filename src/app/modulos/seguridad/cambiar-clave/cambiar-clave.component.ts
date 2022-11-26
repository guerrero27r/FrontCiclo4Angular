import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import * as CryptoJS from 'crypto-js';
import { ModeloCambioClave } from 'src/app/modelos/cambioClave.modelo';

@Component({
  selector: 'app-cambiar-clave',
  templateUrl: './cambiar-clave.component.html',
  styleUrls: ['./cambiar-clave.component.css'],
})
export class CambiarClaveComponent implements OnInit {
  fValidate: FormGroup = this.fb.group({
    Clave_actual: ['', [Validators.required]],
    Nueva_clave: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private servicioSeguridad: SeguridadService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  GuardarClave() {
    let id_usuario = this.servicioSeguridad.obteneridSesion();
    let Clave_actual = CryptoJS.MD5(
      this.fValidate.controls['Clave_actual'].value
    ).toString();
    let Nueva_clave = CryptoJS.MD5(
      this.fValidate.controls['Nueva_clave'].value
    ).toString();

    this.servicioSeguridad
      .CambiarClave(id_usuario, Clave_actual, Nueva_clave)
      .subscribe({
        next: (res: any) => {
          alert('Se cambio la clave');
          console.log(res);
          this.router.navigate(['/inicio']);
        },
        error: (err: any) => {
          alert('datos invalidos');
          console.log(err);
        },
      });
  }
}
