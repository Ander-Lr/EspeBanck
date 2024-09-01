import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeletePasswordPageRoutingModule } from './delete-password-routing.module';

import { DeletePasswordPage } from './delete-password.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeletePasswordPageRoutingModule
  ],
  declarations: [DeletePasswordPage]
})
export class DeletePasswordPageModule {}
