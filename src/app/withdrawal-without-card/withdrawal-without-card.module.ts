import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WithdrawalWithoutCardPageRoutingModule } from './withdrawal-without-card-routing.module';

import { WithdrawalWithoutCardPage } from './withdrawal-without-card.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WithdrawalWithoutCardPageRoutingModule
  ],
  declarations: [WithdrawalWithoutCardPage]
})
export class WithdrawalWithoutCardPageModule {}
