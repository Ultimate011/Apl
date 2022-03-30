import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JazzPage } from './jazz.page';

const routes: Routes = [
  {
    path: '',
    component: JazzPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JazzPageRoutingModule {}
