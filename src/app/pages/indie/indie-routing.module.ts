import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndiePage } from './indie.page';

const routes: Routes = [
  {
    path: '',
    component: IndiePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndiePageRoutingModule {}
