import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JazzPageRoutingModule } from './jazz-routing.module';

import { JazzPage } from './jazz.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JazzPageRoutingModule
  ],
  declarations: [JazzPage]
})
export class JazzPageModule {}
