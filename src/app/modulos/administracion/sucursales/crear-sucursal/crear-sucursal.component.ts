import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloSucursales } from 'src/app/modelos/sucursales.modelo';
import { SucursalesService } from 'src/app/servicios/sucursales.service';

@Component({
  selector: 'app-crear-sucursal',
  templateUrl: './crear-sucursal.component.html',
  styleUrls: ['./crear-sucursal.component.css'],
})
export class CrearSucursalComponent implements OnInit {
  fgValidador: FormGroup = this.fb.group({
    Departamento: ['', [Validators.required]],
    Ciudad: ['', [Validators.required]],
    Direccion: ['', [Validators.required]],
    Telefono: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private servicioSucursal: SucursalesService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  GuardarSucursal() {
    let Departamento = this.fgValidador.controls['Departamento'].value;
    let Ciudad = this.fgValidador.controls['Ciudad'].value;
    let Direccion = this.fgValidador.controls['Direccion'].value;
    let Telefono = this.fgValidador.controls['Telefono'].value;

    let p = new ModeloSucursales();
    p.Departamento = Departamento;
    p.Ciudad = Ciudad;
    p.Direccion = Direccion;
    p.Telefono = Telefono;

    this.servicioSucursal.CrearSucursal(p).subscribe({
      next: (datos: ModeloSucursales) => {
        alert('Prospecto almacenado satisfactoriamente');
        this.router.navigate(['/administracion/buscar-sucursal']);
      },
      error: (error: any) => {
        alert('Error almacenando Prospecto');
      },
    });
  }
}
