import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloProducto } from 'src/app/modelos/productoServicio.modelo';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-editar-producto-servicio',
  templateUrl: './editar-producto-servicio.component.html',
  styleUrls: ['./editar-producto-servicio.component.css'],
})
export class EditarProductoServicioComponent implements OnInit {
  id: string = '';
  fgValidador: FormGroup = this.fb.group({
    id: ['', [Validators.required]],
    Tipo: ['', [Validators.required]],
    Nombre: ['', [Validators.required]],
    Descripcion: ['', [Validators.required]],
    Precio: ['', [Validators.required]],
    Foto: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private servicioProducto: ProductoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.BuscarProducto();
  }

  BuscarProducto() {
    this.servicioProducto
      .ObtenerRegistrosPorId(this.id)
      .subscribe((datos: ModeloProducto) => {
        this.fgValidador.controls['id'].setValue(this.id);
        this.fgValidador.controls['Tipo'].setValue(datos.Tipo);
        this.fgValidador.controls['Nombre'].setValue(datos.Nombre);
        this.fgValidador.controls['Descripcion'].setValue(datos.Descripcion);
        this.fgValidador.controls['Precio'].setValue(datos.Precio);
        this.fgValidador.controls['Foto'].setValue(datos.Foto);
      });
  }

  EditarProducto() {
    let Tipo = this.fgValidador.controls['Tipo'].value;
    let Nombre = this.fgValidador.controls['Nombre'].value;
    let Descripcion = this.fgValidador.controls['Descripcion'].value;
    let Foto = this.fgValidador.controls['Foto'].value;
    let Precio = parseInt(this.fgValidador.controls['Precio'].value);

    let p = new ModeloProducto();
    p.Tipo = Tipo;
    p.Nombre = Nombre;
    p.Descripcion = Descripcion;
    p.Precio = Precio;
    p.Foto = Foto;
    p.id = this.id;

    this.servicioProducto.ActualizarProducto(p).subscribe({
      next: (datos: ModeloProducto) => {
        alert('Producto o Servicio actualizado satisfactoriamente');
        this.router.navigate(['/administracion/buscar-productoServicio']);
      },
      error: (error: any) => {
        alert('Error actualizando el Producto o Servicio');
      },
    });
  }
}
