import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Evidencia1PageRoutingModule } from './evidencia1-routing.module';

import { Evidencia1Page } from './evidencia1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Evidencia1PageRoutingModule
  ],
  declarations: [Evidencia1Page]
})
export class Evidencia1PageModule {}
