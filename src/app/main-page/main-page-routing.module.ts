import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page.component';  // Asegúrate de importar el componente

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent  // Asocia el componente con la ruta
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPageRoutingModule {}
