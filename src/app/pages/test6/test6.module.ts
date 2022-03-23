import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Test6PageRoutingModule } from './test6-routing.module';

import { Test6Page } from './test6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Test6PageRoutingModule
  ],
  declarations: [Test6Page]
})
export class Test6PageModule {}
