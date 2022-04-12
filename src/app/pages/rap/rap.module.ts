import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RapPageRoutingModule } from './rap-routing.module';

import { RapPage } from './rap.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RapPageRoutingModule
  ],
  declarations: [RapPage]
})
export class RapPageModule {}
