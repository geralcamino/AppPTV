import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Evidencia1Page } from './evidencia1.page';

const routes: Routes = [
  {
    path: '',
    component: Evidencia1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Evidencia1PageRoutingModule {}
