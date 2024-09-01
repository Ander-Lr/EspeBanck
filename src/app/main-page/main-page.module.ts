import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';  // Asegúrate de que este módulo esté importado

import { MainPageRoutingModule } from './main-page-routing.module';
import { MainPageComponent } from './main-page.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,  // Importa el IonicModule para que los componentes de Ionic funcionen
    MainPageRoutingModule
  ],
  declarations: [MainPageComponent]
})
export class MainPageModule {}
