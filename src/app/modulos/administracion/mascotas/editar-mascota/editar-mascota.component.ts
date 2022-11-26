import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloMascota } from 'src/app/modelos/mascota.modelo';
import { MascotaService } from 'src/app/servicios/mascota.service';

@Component({
  selector: 'app-editar-mascota',
  templateUrl: './editar-mascota.component.html',
  styleUrls: ['./editar-mascota.component.css'],
})
export class EditarMascotaComponent implements OnInit {
  id: string = '';
  fgValidador: FormGroup = this.fb.group({
    Nombre: ['', [Validators.required]],
    Foto: ['', [Validators.required]],
    Estado: ['', [Validators.required]],
    Especie: ['', [Validators.required]],
    Comentario: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private servicioMascota: MascotaService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.BuscarPlanes();
  }

  BuscarPlanes() {
    this.servicioMascota
      .ObtenerRegistrosMascotaPorId(this.id)
      .subscribe((datos: ModeloMascota) => {
        this.fgValidador.controls['Nombre'].setValue(datos.Nombre);
        this.fgValidador.controls['Foto'].setValue(datos.Foto);
        this.fgValidador.controls['Estado'].setValue(datos.Estado);
        this.fgValidador.controls['Especie'].setValue(datos.Especie);
        this.fgValidador.controls['Comentario'].setValue(datos.Comentario);
      });
  }

  EditarMascota() {
    let Nombre = this.fgValidador.controls['Nombre'].value;
    let Foto = this.fgValidador.controls['Foto'].value;
    let Estado = this.fgValidador.controls['Estado'].value;
    let Especie = this.fgValidador.controls['Especie'].value;
    let Comentario = this.fgValidador.controls['Comentario'].value;

    let p = new ModeloMascota();
    p.Nombre = Nombre;
    p.Foto = Foto;
    p.Estado = Estado;
    p.Especie = Especie;
    p.Comentario = Comentario;
    p.id = this.id;

    this.servicioMascota.ActualizarMascota(p).subscribe({
      next: (datos: ModeloMascota) => {
        alert('Mascota actualizado satisfactoriamente');
        this.router.navigate(['/administracion/buscar-mascota']);
      },
      error: (error: any) => {
        alert('Error actualizando la mascota');
      },
    });
  }
}
