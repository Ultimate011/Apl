import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RapPage } from './rap.page';

const routes: Routes = [
  {
    path: '',
    component: RapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RapPageRoutingModule {}
