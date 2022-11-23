import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloUsuario } from 'src/app/modelos/crearUsuario.modelo';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css'],
})
export class CrearUsuarioComponent implements OnInit {
  fgValidador: FormGroup = this.fb.group({
    Cedula: ['', [Validators.required]],
    Nombre: ['', [Validators.required]],
    Apellido: ['', [Validators.required]],
    Telefono: ['', [Validators.required]],
    Correo: ['', [Validators.required]],
    Rol: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private servicioUsuario: UsuarioService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  GuardarUsuario() {
    let Cedula = this.fgValidador.controls['Cedula'].value;
    let Nombre = this.fgValidador.controls['Nombre'].value;
    let Apellido = this.fgValidador.controls['Apellido'].value;
    let Telefono = this.fgValidador.controls['Telefono'].value;
    let Correo = this.fgValidador.controls['Correo'].value;
    let Rol = this.fgValidador.controls['Rol'].value;

    let p = new ModeloUsuario();
    p.Cedula = Cedula;
    p.Nombre = Nombre;
    p.Apellido = Apellido;
    p.Telefono = Telefono;
    p.Correo = Correo;
    p.Rol = Rol;

    this.servicioUsuario.CrearUsuario(p).subscribe({
      next: (datos: ModeloUsuario) => {
        alert('Usuario almacenado satisfactoriamente');
        this.router.navigate(['/administracion/buscar-usuario']);
      },
      error: (error: any) => {
        alert('Error almacenando Usuario');
      },
    });
  }
}
