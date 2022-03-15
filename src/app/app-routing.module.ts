import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'test',
    loadChildren: () => import('./pages/test/test.module').then( m => m.TestPageModule)
  },
  {
    path: 'test1',
    loadChildren: () => import('./pages/test1/test1.module').then( m => m.Test1PageModule)
  },
  {
    path: 'test2',
    loadChildren: () => import('./pages/test2/test2.module').then( m => m.Test2PageModule)
  },
  {
    path: 'test3',
    loadChildren: () => import('./pages/test3/test3.module').then( m => m.Test3PageModule)
  },
  {
    path: 'test4',
    loadChildren: () => import('./pages/test4/test4.module').then( m => m.Test4PageModule)
  },
  {
    path: 'player-test',
    loadChildren: () => import('./pages/player-test/player-test.module').then( m => m.PlayerTestPageModule)
  },
  {
    path: 'line-test',
    loadChildren: () => import('./pages/line-test/line-test.module').then( m => m.LineTestPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}