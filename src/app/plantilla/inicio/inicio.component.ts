import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloPlan } from 'src/app/modelos/plan.modelo';
import { ModeloProducto } from 'src/app/modelos/productoServicio.modelo';
import { ModeloProspectos } from 'src/app/modelos/prospectos.modelo';
import { PlanService } from 'src/app/servicios/plan.service';
import { ProductoService } from 'src/app/servicios/producto.service';
import { ProspectosService } from 'src/app/servicios/prospectos.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  ListadoRegistros: ModeloProducto[] = [];
  ListadoRegistrosPlan: ModeloPlan[] = [];

  fgValidador: FormGroup = this.fb.group({
    Nombre: ['', [Validators.required]],
    Apellido: ['', [Validators.required]],
    Correo: ['', [Validators.required]],
    Celular: ['', [Validators.required]],
    Comentario: ['', [Validators.required]],
  });
  constructor(
    private productoServicio: ProductoService,
    private planServicio: PlanService,
    private fb: FormBuilder,
    private servicioPrsopecto: ProspectosService
  ) {}

  ngOnInit(): void {
    this.ObtenerListadoProductos();
    this.ObtenerListadoPlanes();
  }

  ObtenerListadoProductos() {
    this.productoServicio
      .ObtenerRegistros()
      .subscribe((datos: ModeloProducto[]) => {
        this.ListadoRegistros = datos;
      });
  }

  ObtenerListadoPlanes() {
    this.planServicio
      .ObtenerRegistrosPlan()
      .subscribe((datos: ModeloPlan[]) => {
        this.ListadoRegistrosPlan = datos;
      });
  }

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
        alert(
          'Se envio tu información con tu solicitud pronto se contactaran contigo'
        );
      },
      error: (error: any) => {
        alert('Error no se pudo enviar tu solicitud intentalo otra vez');
      },
    });
  }
}
