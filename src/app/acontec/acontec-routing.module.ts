import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcontecPage } from './acontec.page';

const routes: Routes = [
  {
    path: '',
    component: AcontecPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcontecPageRoutingModule {}
