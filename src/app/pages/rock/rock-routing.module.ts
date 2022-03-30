import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RockPage } from './rock.page';

const routes: Routes = [
  {
    path: '',
    component: RockPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RockPageRoutingModule {}
