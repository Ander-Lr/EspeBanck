import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';  // Importar IonicModule
import { AccountEditingRoutingModule } from './account-editing-routing.module';

import { AccountEditingComponent } from './account-editing.component';

@NgModule({
  declarations: [AccountEditingComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,  // Asegúrate de que IonicModule esté aquí
    AccountEditingRoutingModule
  ]
})
export class AccountEditingModule { }
