import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloProducto } from 'src/app/modelos/productoServicio.modelo';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-crear-producto-servicio',
  templateUrl: './crear-producto-servicio.component.html',
  styleUrls: ['./crear-producto-servicio.component.css'],
})
export class CrearProductoServicioComponent implements OnInit {
  fgValidador: FormGroup = this.fb.group({
    Tipo: ['', [Validators.required]],
    Nombre: ['', [Validators.required]],
    Descripcion: ['', [Validators.required]],
    Precio: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private servicioProducto: ProductoService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  GuardarProducto() {
    let Tipo = this.fgValidador.controls['Tipo'].value;
    let Nombre = this.fgValidador.controls['Nombre'].value;
    let Descripcion = this.fgValidador.controls['Descripcion'].value;
    let Precio = parseInt(this.fgValidador.controls['Precio'].value);

    let p = new ModeloProducto();
    p.Tipo = Tipo;
    p.Nombre = Nombre;
    p.Descripcion = Descripcion;
    p.Precio = Precio;

    this.servicioProducto.CrearProducto(p).subscribe({
      next: (datos: ModeloProducto) => {
        alert('Producto o Servicio almacenado satisfactoriamente');
        this.router.navigate(['/administracion/buscar-productoServicio']);
      },
      error: (error: any) => {
        alert('Error almacenando Producto o Servicio');
      },
    });
  }
}
