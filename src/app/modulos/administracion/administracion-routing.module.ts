import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarMascotaComponent } from './mascotas/buscar-mascota/buscar-mascota.component';
import { CrearMascotaComponent } from './mascotas/crear-mascota/crear-mascota.component';
import { EditarMascotaComponent } from './mascotas/editar-mascota/editar-mascota.component';
import { EliminarMascotaComponent } from './mascotas/eliminar-mascota/eliminar-mascota.component';
import { BuscarPlanComponent } from './planes/buscar-plan/buscar-plan.component';
import { CrearPlanComponent } from './planes/crear-plan/crear-plan.component';
import { EditarPlanComponent } from './planes/editar-plan/editar-plan.component';
import { EliminarPlanComponent } from './planes/eliminar-plan/eliminar-plan.component';
import { BuscarProductoServicioComponent } from './productoServicio/buscar-producto-servicio/buscar-producto-servicio.component';
import { CrearProductoServicioComponent } from './productoServicio/crear-producto-servicio/crear-producto-servicio.component';
import { EditarProductoServicioComponent } from './productoServicio/editar-producto-servicio/editar-producto-servicio.component';
import { EliminarProductoServicioComponent } from './productoServicio/eliminar-producto-servicio/eliminar-producto-servicio.component';
import { BuscarProspectoComponent } from './prospectos/buscar-prospecto/buscar-prospecto.component';
import { CrearProspectoComponent } from './prospectos/crear-prospecto/crear-prospecto.component';
import { EditarProspectoComponent } from './prospectos/editar-prospecto/editar-prospecto.component';
import { EliminarProspectoComponent } from './prospectos/eliminar-prospecto/eliminar-prospecto.component';
import { BuscarSucursalComponent } from './sucursales/buscar-sucursal/buscar-sucursal.component';
import { CrearSucursalComponent } from './sucursales/crear-sucursal/crear-sucursal.component';
import { EditarSucursalComponent } from './sucursales/editar-sucursal/editar-sucursal.component';
import { EliminarSucursalComponent } from './sucursales/eliminar-sucursal/eliminar-sucursal.component';
import { BuscarUsuarioComponent } from './usuarios/buscar-usuario/buscar-usuario.component';
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './usuarios/editar-usuario/editar-usuario.component';
import { EliminarUsuarioComponent } from './usuarios/eliminar-usuario/eliminar-usuario.component';

const routes: Routes = [
  //usuario
  {
    path: 'crear-usuario',
    component: CrearUsuarioComponent,
  },
  {
    path: 'buscar-usuario',
    component: BuscarUsuarioComponent,
  },
  {
    path: 'editar-usuario',
    component: EditarUsuarioComponent,
  },
  {
    path: 'eliminar-usuario',
    component: EliminarUsuarioComponent,
  },
  //mascota
  {
    path: 'crear-mascota',
    component: CrearMascotaComponent,
  },
  {
    path: 'buscar-mascota',
    component: BuscarMascotaComponent,
  },
  {
    path: 'editar-mascota',
    component: EditarMascotaComponent,
  },
  {
    path: 'eliminar-mascota',
    component: EliminarMascotaComponent,
  },
  //planes
  {
    path: 'crear-plan',
    component: CrearPlanComponent,
  },
  {
    path: 'buscar-plan',
    component: BuscarPlanComponent,
  },
  {
    path: 'editar-plan',
    component: EditarPlanComponent,
  },
  {
    path: 'eliminar-plan',
    component: EliminarPlanComponent,
  },
  //productoServicio
  {
    path: 'crear-productoServicio',
    component: CrearProductoServicioComponent,
  },
  {
    path: 'buscar-productoServicio',
    component: BuscarProductoServicioComponent,
  },
  {
    path: 'editar-productoServicio/',
    component: EditarProductoServicioComponent,
  },
  {
    path: 'editar-productoServicio/:id',
    component: EditarProductoServicioComponent,
  },
  {
    path: 'eliminar-productoServicio',
    component: EliminarProductoServicioComponent,
  },
  //prospectos
  {
    path: 'crear-prospecto',
    component: CrearProspectoComponent,
  },
  {
    path: 'buscar-prospecto',
    component: BuscarProspectoComponent,
  },
  {
    path: 'editar-prospecto',
    component: EditarProspectoComponent,
  },
  {
    path: 'eliminar-prospecto',
    component: EliminarProspectoComponent,
  },
  //sucursales
  {
    path: 'crear-sucursal',
    component: CrearSucursalComponent,
  },
  {
    path: 'buscar-sucursal',
    component: BuscarSucursalComponent,
  },
  {
    path: 'editar-sucursal',
    component: EditarSucursalComponent,
  },
  {
    path: 'eliminar-sucursal',
    component: EliminarSucursalComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministracionRoutingModule {}
