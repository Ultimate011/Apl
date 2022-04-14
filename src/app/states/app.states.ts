import { Injectable } from '@angular/core';

import { State, StateContext, Action, Selector, NgxsOnInit } from '@ngxs/store';
import { SetTheme } from './app.actions';

export interface AppStateModel {
    theme: string;
}


const defaults: AppStateModel = {
    theme: 'ettFintTema'
};

@State<AppStateModel>({
    name: 'app',
    defaults,
})
@Injectable({ providedIn: 'root' })
export class AppState implements NgxsOnInit {
    constructor() {}

    @Selector()
    static theme({ theme }: AppStateModel): string {
        return theme;
    }

    ngxsOnInit({ dispatch, patchState }: StateContext<AppStateModel>) {
    }

   @Action(SetTheme)
   setTheme({patchState}: StateContext<AppStateModel>, {theme}: SetTheme){
    patchState({theme})
   }
}
