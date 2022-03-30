import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BluesPage } from './blues.page';

const routes: Routes = [
  {
    path: '',
    component: BluesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BluesPageRoutingModule {}
