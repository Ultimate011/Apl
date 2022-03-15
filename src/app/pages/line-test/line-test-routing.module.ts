import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LineTestPage } from './line-test.page';

const routes: Routes = [
  {
    path: '',
    component: LineTestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LineTestPageRoutingModule {}
