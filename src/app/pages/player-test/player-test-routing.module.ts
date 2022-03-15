import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayerTestPage } from './player-test.page';

const routes: Routes = [
  {
    path: '',
    component: PlayerTestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlayerTestPageRoutingModule {}
