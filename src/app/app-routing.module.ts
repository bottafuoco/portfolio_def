import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { CredencialesComponent } from './credenciales/credenciales.component';
import { DatosComponent } from './datos/datos.component';
import { DireccionComponent } from './direccion/direccion.component';
import { NombreComponent } from './nombre/nombre.component';

const routes: Routes = [

  {
    path:'nombre',
    component:NombreComponent
  },
  {
    path:'datos',
    component:DatosComponent
  },
  {
    path:'contacto',
    component:ContactoComponent
  },

  {
    path:'direccion',
    component:DireccionComponent
  },
  {
    path:'credenciales',
    component:CredencialesComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
