import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-identificacion',
  templateUrl: './identificacion.component.html',
  styleUrls: ['./identificacion.component.css'],
})
export class IdentificacionComponent implements OnInit {
  fValidate: FormGroup = this.fb.group({
    Usuario: ['', [Validators.required, Validators.email]],
    Clave: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private servicioSeguridad: SeguridadService
  ) {}

  ngOnInit(): void {}

  IdentificacionUsuario() {
    let Usuario = this.fValidate.controls['Usuario'].value;
    let Clave = this.fValidate.controls['Clave'].value;
    let claveCifrada = CryptoJS.MD5(Clave).toString();
    this.servicioSeguridad.Identificar(Usuario, claveCifrada).subscribe({
      next: (datos: any) => {
        console.log(datos);
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
}
