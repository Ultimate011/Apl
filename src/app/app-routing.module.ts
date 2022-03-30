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
  },  {
    path: 'test5',
    loadChildren: () => import('./pages/test5/test5.module').then( m => m.Test5PageModule)
  },
  {
    path: 'test6',
    loadChildren: () => import('./pages/test6/test6.module').then( m => m.Test6PageModule)
  },
  {
    path: 'dance',
    loadChildren: () => import('./pages/dance/dance.module').then( m => m.DancePageModule)
  },
  {
    path: 'jazz',
    loadChildren: () => import('./pages/jazz/jazz.module').then( m => m.JazzPageModule)
  },
  {
    path: 'rock',
    loadChildren: () => import('./pages/rock/rock.module').then( m => m.RockPageModule)
  },
  {
    path: 'pop',
    loadChildren: () => import('./pages/pop/pop.module').then( m => m.PopPageModule)
  },
  {
    path: 'rap',
    loadChildren: () => import('./pages/rap/rap.module').then( m => m.RapPageModule)
  },
  {
    path: 'indie',
    loadChildren: () => import('./pages/indie/indie.module').then( m => m.IndiePageModule)
  },
  {
    path: 'country',
    loadChildren: () => import('./pages/country/country.module').then( m => m.CountryPageModule)
  },
  {
    path: 'classical',
    loadChildren: () => import('./pages/classical/classical.module').then( m => m.ClassicalPageModule)
  },
  {
    path: 'blues',
    loadChildren: () => import('./pages/blues/blues.module').then( m => m.BluesPageModule)
  },
  {
    path: 'electronic',
    loadChildren: () => import('./pages/electronic/electronic.module').then( m => m.ElectronicPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}