import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloProspectos } from 'src/app/modelos/prospectos.modelo';
import { ProspectosService } from 'src/app/servicios/prospectos.service';

@Component({
  selector: 'app-eliminar-prospecto',
  templateUrl: './eliminar-prospecto.component.html',
  styleUrls: ['./eliminar-prospecto.component.css'],
})
export class EliminarProspectoComponent implements OnInit {
  id: string = '';
  fgValidador: FormGroup = this.fb.group({
    id: ['', [Validators.required]],
    Nombre: ['', [Validators.required]],
    Apellido: ['', [Validators.required]],
    Correo: ['', [Validators.required]],
    Celular: ['', [Validators.required]],
    Comentario: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private servicioPrsopecto: ProspectosService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.BuscarProspecto();
  }

  BuscarProspecto() {
    this.servicioPrsopecto
      .ObtenerRegistrosProspectosPorId(this.id)
      .subscribe((datos: ModeloProspectos) => {
        this.fgValidador.controls['id'].setValue(this.id);
        this.fgValidador.controls['Nombre'].setValue(datos.Nombre);
        this.fgValidador.controls['Apellido'].setValue(datos.Apellido);
        this.fgValidador.controls['Correo'].setValue(datos.Correo);
        this.fgValidador.controls['Celular'].setValue(datos.Celular);
        this.fgValidador.controls['Comentario'].setValue(datos.Comentario);
      });
  }

  BorrarProspecto() {
    let Nombre = this.fgValidador.controls['Nombre'].value;
    let Apellido = this.fgValidador.controls['Apellido'].value;
    let Correo = this.fgValidador.controls['Correo'].value;
    let Celular = this.fgValidador.controls['Celular'].value;
    let Comentario = this.fgValidador.controls['Comentario'].value;

    let p = new ModeloProspectos();
    p.Nombre = Nombre;
    p.Apellido = Apellido;
    p.Correo = Correo;
    p.Celular = Celular;
    p.Comentario = Comentario;
    p.id = this.id;

    this.servicioPrsopecto.EliminarProspecto(this.id).subscribe({
      next: (datos: ModeloProspectos) => {
        alert('Prospecto Eliminado satisfactoriamente');
        this.router.navigate(['/administracion/buscar-prospecto']);
      },
      error: (error: any) => {
        alert('Error no se ha eliminado el Prospecto');
      },
    });
  }
}
