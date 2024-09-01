import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WithdrawalWithoutCardPage } from './withdrawal-without-card.page';

const routes: Routes = [
  {
    path: '',
    component: WithdrawalWithoutCardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WithdrawalWithoutCardPageRoutingModule {}
