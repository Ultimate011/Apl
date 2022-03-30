import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClassicalPageRoutingModule } from './classical-routing.module';

import { ClassicalPage } from './classical.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClassicalPageRoutingModule
  ],
  declarations: [ClassicalPage]
})
export class ClassicalPageModule {}
