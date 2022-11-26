import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloPlan } from 'src/app/modelos/plan.modelo';
import { PlanService } from 'src/app/servicios/plan.service';

@Component({
  selector: 'app-crear-plan',
  templateUrl: './crear-plan.component.html',
  styleUrls: ['./crear-plan.component.css'],
})
export class CrearPlanComponent implements OnInit {
  fgValidador: FormGroup = this.fb.group({
    Nombre: ['', [Validators.required]],
    Descripcion: ['', [Validators.required]],
    Precio: ['', [Validators.required]],
    Foto: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private servicioPlan: PlanService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  GuardarPlan() {
    let Nombre = this.fgValidador.controls['Nombre'].value;
    let Descripcion = this.fgValidador.controls['Descripcion'].value;
    let Precio = parseInt(this.fgValidador.controls['Precio'].value);
    let Foto = this.fgValidador.controls['Foto'].value;

    let p = new ModeloPlan();
    p.Nombre = Nombre;
    p.Descripcion = Descripcion;
    p.Precio = Precio;
    p.Foto = Foto;

    this.servicioPlan.CrearPlan(p).subscribe({
      next: (datos: ModeloPlan) => {
        alert('Plan almacenado satisfactoriamente');
        this.router.navigate(['/administracion/buscar-plan']);
      },
      error: (error: any) => {
        alert('Error almacenando Plan');
      },
    });
  }
}
