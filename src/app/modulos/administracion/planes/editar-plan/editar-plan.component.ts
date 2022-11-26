import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloPlan } from 'src/app/modelos/plan.modelo';
import { PlanService } from 'src/app/servicios/plan.service';

@Component({
  selector: 'app-editar-plan',
  templateUrl: './editar-plan.component.html',
  styleUrls: ['./editar-plan.component.css'],
})
export class EditarPlanComponent implements OnInit {
  id: string = '';
  fgValidador: FormGroup = this.fb.group({
    id: ['', [Validators.required]],
    Nombre: ['', [Validators.required]],
    Descripcion: ['', [Validators.required]],
    Precio: ['', [Validators.required]],
    Foto: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private servicioPlan: PlanService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.BuscarPlanes();
  }

  BuscarPlanes() {
    this.servicioPlan
      .ObtenerRegistrosPlanPorId(this.id)
      .subscribe((datos: ModeloPlan) => {
        this.fgValidador.controls['id'].setValue(this.id);
        this.fgValidador.controls['Nombre'].setValue(datos.Nombre);
        this.fgValidador.controls['Descripcion'].setValue(datos.Descripcion);
        this.fgValidador.controls['Precio'].setValue(datos.Precio);
        this.fgValidador.controls['Foto'].setValue(datos.Foto);
      });
  }

  EditarPlan() {
    let Nombre = this.fgValidador.controls['Nombre'].value;
    let Descripcion = this.fgValidador.controls['Descripcion'].value;
    let Precio = parseInt(this.fgValidador.controls['Precio'].value);
    let Foto = this.fgValidador.controls['Foto'].value;

    let p = new ModeloPlan();
    p.Nombre = Nombre;
    p.Descripcion = Descripcion;
    p.Precio = Precio;
    p.Foto = Foto;
    p.id = this.id;

    this.servicioPlan.ActualizarPlan(p).subscribe({
      next: (datos: ModeloPlan) => {
        alert('Plan actualizado satisfactoriamente');
        this.router.navigate(['/administracion/buscar-plan']);
      },
      error: (error: any) => {
        alert('Error actualizando el Plan');
      },
    });
  }
}
