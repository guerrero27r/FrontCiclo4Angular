import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloMascota } from 'src/app/modelos/mascota.modelo';
import { MascotaService } from 'src/app/servicios/mascota.service';

@Component({
  selector: 'app-crear-mascota',
  templateUrl: './crear-mascota.component.html',
  styleUrls: ['./crear-mascota.component.css'],
})
export class CrearMascotaComponent implements OnInit {
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
    private router: Router
  ) {}

  ngOnInit(): void {}

  GuardarMascota() {
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

    this.servicioMascota.CrearMascota(p).subscribe({
      next: (datos: ModeloMascota) => {
        alert('Mascota almacenado satisfactoriamente');
        this.router.navigate(['/administracion/buscar-mascota']);
      },
      error: (error: any) => {
        alert('Error almacenando mascota');
      },
    });
  }
}
