import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LineTestPageRoutingModule } from './line-test-routing.module';

import { LineTestPage } from './line-test.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LineTestPageRoutingModule
  ],
  declarations: [LineTestPage]
})
export class LineTestPageModule {}
