import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Test7PageRoutingModule } from './test7-routing.module';

import { Test7Page } from './test7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Test7PageRoutingModule
  ],
  declarations: [Test7Page]
})
export class Test7PageModule {}
