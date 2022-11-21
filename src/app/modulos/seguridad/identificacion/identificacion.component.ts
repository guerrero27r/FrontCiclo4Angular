import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import * as CryptoJS from 'crypto-js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-identificacion',
  templateUrl: './identificacion.component.html',
  styleUrls: ['./identificacion.component.css'],
})
export class IdentificacionComponent implements OnInit {
  fValidate: FormGroup = this.fb.group({
    Usuario: ['', [Validators.required, Validators.email]],
    Contrasena: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private servicioSeguridad: SeguridadService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  IdentificacionUsuario() {
    let Usuario = this.fValidate.controls['Usuario'].value;
    let Contrasena = this.fValidate.controls['Contrasena'].value;
    let claveCifrada = CryptoJS.MD5(Contrasena).toString();
    this.servicioSeguridad.Identificar(Usuario, claveCifrada).subscribe({
      next: (datos: any) => {
        alert('Iniciaste Sesion');
        this.servicioSeguridad.AlmacenarSesion(datos);
        this.router.navigate(['/inicio']);
      },
      error: (err: any) => {
        alert('datos invalidos');
        console.log(err);
      },
    });
  }
}
