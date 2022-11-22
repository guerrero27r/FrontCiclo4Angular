import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './usuarios/editar-usuario/editar-usuario.component';
import { EliminarUsuarioComponent } from './usuarios/eliminar-usuario/eliminar-usuario.component';
import { BuscarUsuarioComponent } from './usuarios/buscar-usuario/buscar-usuario.component';
import { CrearMascotaComponent } from './mascotas/crear-mascota/crear-mascota.component';
import { EditarMascotaComponent } from './mascotas/editar-mascota/editar-mascota.component';
import { EliminarMascotaComponent } from './mascotas/eliminar-mascota/eliminar-mascota.component';
import { BuscarMascotaComponent } from './mascotas/buscar-mascota/buscar-mascota.component';
import { BuscarPlanComponent } from './planes/buscar-plan/buscar-plan.component';
import { EditarPlanComponent } from './planes/editar-plan/editar-plan.component';
import { CrearPlanComponent } from './planes/crear-plan/crear-plan.component';
import { EliminarPlanComponent } from './planes/eliminar-plan/eliminar-plan.component';
import { EliminarSucursalComponent } from './sucursales/eliminar-sucursal/eliminar-sucursal.component';
import { CrearSucursalComponent } from './sucursales/crear-sucursal/crear-sucursal.component';
import { BuscarSucursalComponent } from './sucursales/buscar-sucursal/buscar-sucursal.component';
import { EditarSucursalComponent } from './sucursales/editar-sucursal/editar-sucursal.component';
import { EliminarProspectoComponent } from './prospectos/eliminar-prospecto/eliminar-prospecto.component';
import { EditarProspectoComponent } from './prospectos/editar-prospecto/editar-prospecto.component';
import { BuscarProspectoComponent } from './prospectos/buscar-prospecto/buscar-prospecto.component';
import { CrearProspectoComponent } from './prospectos/crear-prospecto/crear-prospecto.component';
import { CrearProductoServicioComponent } from './productoServicio/crear-producto-servicio/crear-producto-servicio.component';
import { BuscarProductoServicioComponent } from './productoServicio/buscar-producto-servicio/buscar-producto-servicio.component';
import { EditarProductoServicioComponent } from './productoServicio/editar-producto-servicio/editar-producto-servicio.component';
import { EliminarProductoServicioComponent } from './productoServicio/eliminar-producto-servicio/eliminar-producto-servicio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CrearUsuarioComponent,
    EditarUsuarioComponent,
    EliminarUsuarioComponent,
    BuscarUsuarioComponent,
    CrearMascotaComponent,
    EditarMascotaComponent,
    EliminarMascotaComponent,
    BuscarMascotaComponent,
    BuscarPlanComponent,
    EditarPlanComponent,
    CrearPlanComponent,
    EliminarPlanComponent,
    EliminarSucursalComponent,
    CrearSucursalComponent,
    BuscarSucursalComponent,
    EditarSucursalComponent,
    EliminarProspectoComponent,
    EditarProspectoComponent,
    BuscarProspectoComponent,
    CrearProspectoComponent,
    CrearProductoServicioComponent,
    BuscarProductoServicioComponent,
    EditarProductoServicioComponent,
    EliminarProductoServicioComponent,
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class AdministracionModule {}
