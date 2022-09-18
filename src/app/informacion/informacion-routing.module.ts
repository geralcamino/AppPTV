import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InformacionPage } from './informacion.page';

const routes: Routes = [
  {
    path: '',
    component: InformacionPage
  },
  {
    path: 'evidencia1',
    loadChildren: () => import('./evidencia1/evidencia1.module').then( m => m.Evidencia1PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InformacionPageRoutingModule {}
