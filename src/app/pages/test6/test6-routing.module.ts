import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Test6Page } from './test6.page';

const routes: Routes = [
  {
    path: '',
    component: Test6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Test6PageRoutingModule {}
