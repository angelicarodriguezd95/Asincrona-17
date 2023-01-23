import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallesComponent } from './principal/detalles/detalles.component';
import { HomeComponent } from './principal/home/home.component';
import { TablaComponent } from './principal/tabla/tabla.component';

const routes: Routes = [
  {path:"detalles/:id",component:DetallesComponent},
  {path:"",component:HomeComponent},
  {path:"tabla",component:TablaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
