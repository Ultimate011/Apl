import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Test7Page } from './test7.page';

const routes: Routes = [
  {
    path: '',
    component: Test7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Test7PageRoutingModule {}
