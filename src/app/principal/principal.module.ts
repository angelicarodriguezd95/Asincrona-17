import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaComponent } from './tabla/tabla.component';
import { DetallesComponent } from './detalles/detalles.component';
import { AppRoutingModule } from '../app-routing.module';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faSquarePen } from '@fortawesome/free-solid-svg-icons';



@NgModule({
  declarations: [
    TablaComponent,
    NavComponent,
    HomeComponent,
    DetallesComponent,
    
   
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  exports:[
    TablaComponent,
    NavComponent,
    DetallesComponent
  ]
})
export class PrincipalModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faSquarePen);
  } 
}
