import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcontecPageRoutingModule } from './acontec-routing.module';

import { AcontecPage } from './acontec.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcontecPageRoutingModule
  ],
  declarations: [AcontecPage]
})
export class AcontecPageModule {}
