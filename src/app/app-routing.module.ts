import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'trasfer',
    loadChildren: () => import('./trasfer/trasfer.module').then(m => m.TrasferPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'create-account',
    loadChildren: () => import('./create-account/create-account.module').then(m => m.CreateAccountPageModule)
  },
  {
    path: 'delete-password',
    loadChildren: () => import('./delete-password/delete-password.module').then(m => m.DeletePasswordPageModule)
  },
  {
    path: 'main-page',
    loadChildren: () => import('./main-page/main-page.module').then(m => m.MainPageModule)
  },
  {
    path: 'transaction-history',
    loadChildren: () => import('./transaction-history/transaction-history.module').then(m => m.TransactionHistoryPageModule)
  },
  {
    path: 'account-editing',
    loadChildren: () => import('./account-editing/account-editing.module').then(m => m.AccountEditingModule)
  },
  {
    path: 'withdrawal-without-card',
    loadChildren: () => import('./withdrawal-without-card/withdrawal-without-card.module').then(m => m.WithdrawalWithoutCardPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
