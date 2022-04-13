import { DOCUMENT } from '@angular/common';
import { Injectable, RendererFactory2, Inject, Renderer2 } from '@angular/core';
import { Store } from '@ngxs/store';
import { SetTheme } from '../states/app.actions';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  renderer: Renderer2;
  constructor(
    private rendererFactory: RendererFactory2,
    @Inject(DOCUMENT) private document: Document,
    private store: Store
  ) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }

  enableDark() {
    this.store.dispatch(new SetTheme('dark'));
  }

  enableLight() {
    this.store.dispatch(new SetTheme('light'));
  }

  enableOrang() {
    this.store.dispatch(new SetTheme('orang'));
  }

  enableBlue() {
    this.store.dispatch(new SetTheme('blue'));
  }

  enablePurple() {
    this.store.dispatch(new SetTheme('purple'));
  }

  enableYelgre() {
    this.store.dispatch(new SetTheme('yelgre'));
  }

  enableSalmon() {
    this.store.dispatch(new SetTheme('salmon'));
  }

  enableYelblu() {
    this.store.dispatch(new SetTheme('yelblu'));
  }
}