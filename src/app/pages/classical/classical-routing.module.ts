import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClassicalPage } from './classical.page';

const routes: Routes = [
  {
    path: '',
    component: ClassicalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClassicalPageRoutingModule {}
