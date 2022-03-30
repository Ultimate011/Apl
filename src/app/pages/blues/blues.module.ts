import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BluesPageRoutingModule } from './blues-routing.module';

import { BluesPage } from './blues.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BluesPageRoutingModule
  ],
  declarations: [BluesPage]
})
export class BluesPageModule {}
