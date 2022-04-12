import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HamburgerTestPageRoutingModule } from './hamburger-test-routing.module';

import { HamburgerTestPage } from './hamburger-test.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HamburgerTestPageRoutingModule
  ],
  declarations: [HamburgerTestPage]
})
export class HamburgerTestPageModule {}
