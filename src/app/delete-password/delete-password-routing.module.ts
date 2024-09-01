import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeletePasswordPage } from './delete-password.page';

const routes: Routes = [
  {
    path: '',
    component: DeletePasswordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeletePasswordPageRoutingModule {}
