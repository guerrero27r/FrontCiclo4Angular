import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloUsuario } from 'src/app/modelos/crearUsuario.modelo';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-eliminar-usuario',
  templateUrl: './eliminar-usuario.component.html',
  styleUrls: ['./eliminar-usuario.component.css'],
})
export class EliminarUsuarioComponent implements OnInit {
  id: string = '';
  fgValidador: FormGroup = this.fb.group({
    id: ['', [Validators.required]],
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
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.BuscarUsuario();
  }

  BuscarUsuario() {
    this.servicioUsuario
      .ObtenerRegistrosUsuarioPorId(this.id)
      .subscribe((datos: ModeloUsuario) => {
        this.fgValidador.controls['id'].setValue(this.id);
        this.fgValidador.controls['Cedula'].setValue(datos.Cedula);
        this.fgValidador.controls['Nombre'].setValue(datos.Nombre);
        this.fgValidador.controls['Apellido'].setValue(datos.Apellido);
        this.fgValidador.controls['Telefono'].setValue(datos.Telefono);
        this.fgValidador.controls['Correo'].setValue(datos.Correo);
        this.fgValidador.controls['Rol'].setValue(datos.Rol);
      });
  }

  BorrarUsuario() {
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
    p.id = this.id;

    this.servicioUsuario.EliminarUsuario(this.id).subscribe({
      next: (datos: ModeloUsuario) => {
        alert('Usuario Eliminado satisfactoriamente');
        this.router.navigate(['/administracion/buscar-usuario']);
      },
      error: (error: any) => {
        alert('Error al eliminar Usuario');
      },
    });
  }
}
