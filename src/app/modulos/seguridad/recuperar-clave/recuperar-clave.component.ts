import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

@Component({
  selector: 'app-recuperar-clave',
  templateUrl: './recuperar-clave.component.html',
  styleUrls: ['./recuperar-clave.component.css'],
})
export class RecuperarClaveComponent implements OnInit {
  fValidate: FormGroup = this.fb.group({
    Correo: ['', [Validators.required, Validators.email]],
  });

  constructor(
    private fb: FormBuilder,
    private servicioSeguridad: SeguridadService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  RecuperarClaveUsuario() {
    let Correo = this.fValidate.controls['Correo'].value;
    this.servicioSeguridad.RecuperarClave(Correo).subscribe({
      next: (datos: any) => {
        alert('Contraseña recuperada revisa tu correo con la nueva contraseña');
        this.router.navigate(['/inicio']);
      },
      error: (err: any) => {
        alert('datos invalidos');
        console.log(err);
      },
    });
  }
}
