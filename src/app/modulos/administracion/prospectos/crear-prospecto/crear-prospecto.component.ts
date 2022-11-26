import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloProspectos } from 'src/app/modelos/prospectos.modelo';
import { ProspectosService } from 'src/app/servicios/prospectos.service';

@Component({
  selector: 'app-crear-prospecto',
  templateUrl: './crear-prospecto.component.html',
  styleUrls: ['./crear-prospecto.component.css'],
})
export class CrearProspectoComponent implements OnInit {
  fgValidador: FormGroup = this.fb.group({
    Nombre: ['', [Validators.required]],
    Apellido: ['', [Validators.required]],
    Correo: ['', [Validators.required]],
    Celular: ['', [Validators.required]],
    Comentario: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private servicioPrsopecto: ProspectosService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  GuardarProspectos() {
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

    this.servicioPrsopecto.CrearProspecto(p).subscribe({
      next: (datos: ModeloProspectos) => {
        alert('Prospecto almacenado satisfactoriamente');
        this.router.navigate(['/administracion/buscar-prospecto']);
      },
      error: (error: any) => {
        alert('Error almacenando Prospecto');
      },
    });
  }
}
