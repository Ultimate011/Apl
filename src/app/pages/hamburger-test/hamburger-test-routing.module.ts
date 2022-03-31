import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HamburgerTestPage } from './hamburger-test.page';

const routes: Routes = [
  {
    path: '',
    component: HamburgerTestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HamburgerTestPageRoutingModule {}
