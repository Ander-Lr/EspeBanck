import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountEditingComponent } from './account-editing.component';

const routes: Routes = [
  {
    path: '',
    component: AccountEditingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountEditingRoutingModule {}
