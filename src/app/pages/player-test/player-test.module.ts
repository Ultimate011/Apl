import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlayerTestPageRoutingModule } from './player-test-routing.module';

import { PlayerTestPage } from './player-test.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlayerTestPageRoutingModule
    
  ],
  declarations: [PlayerTestPage]
})
export class PlayerTestPageModule {}
