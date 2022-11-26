import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloSucursales } from 'src/app/modelos/sucursales.modelo';
import { SucursalesService } from 'src/app/servicios/sucursales.service';

@Component({
  selector: 'app-eliminar-sucursal',
  templateUrl: './eliminar-sucursal.component.html',
  styleUrls: ['./eliminar-sucursal.component.css'],
})
export class EliminarSucursalComponent implements OnInit {
  id: string = '';
  fgValidador: FormGroup = this.fb.group({
    id: ['', [Validators.required]],
    Departamento: ['', [Validators.required]],
    Ciudad: ['', [Validators.required]],
    Direccion: ['', [Validators.required]],
    Telefono: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private servicioSucursal: SucursalesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.BuscarSucursales();
  }

  BuscarSucursales() {
    this.servicioSucursal
      .ObtenerRegistrosSucursalesPorId(this.id)
      .subscribe((datos: ModeloSucursales) => {
        this.fgValidador.controls['id'].setValue(this.id);
        this.fgValidador.controls['Departamento'].setValue(datos.Departamento);
        this.fgValidador.controls['Ciudad'].setValue(datos.Ciudad);
        this.fgValidador.controls['Direccion'].setValue(datos.Direccion);
        this.fgValidador.controls['Telefono'].setValue(datos.Telefono);
      });
  }

  EliminarSucursal() {
    let Departamento = this.fgValidador.controls['Departamento'].value;
    let Ciudad = this.fgValidador.controls['Ciudad'].value;
    let Direccion = this.fgValidador.controls['Direccion'].value;
    let Telefono = this.fgValidador.controls['Telefono'].value;

    let p = new ModeloSucursales();
    p.Departamento = Departamento;
    p.Ciudad = Ciudad;
    p.Direccion = Direccion;
    p.Telefono = Telefono;
    p.id = this.id;

    this.servicioSucursal.EliminarSucursal(this.id).subscribe({
      next: (datos: ModeloSucursales) => {
        alert('Sucursal actualizada satisfactoriamente');
        this.router.navigate(['/administracion/buscar-sucursal']);
      },
      error: (error: any) => {
        alert('Error actualizando la Sucursal');
      },
    });
  }
}
