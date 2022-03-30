import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndiePageRoutingModule } from './indie-routing.module';

import { IndiePage } from './indie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndiePageRoutingModule
  ],
  declarations: [IndiePage]
})
export class IndiePageModule {}
