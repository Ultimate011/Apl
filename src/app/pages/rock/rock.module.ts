import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RockPageRoutingModule } from './rock-routing.module';

import { RockPage } from './rock.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RockPageRoutingModule
  ],
  declarations: [RockPage]
})
export class RockPageModule {}
