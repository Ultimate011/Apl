import { Component, OnInit } from '@angular/core';
import { NgxsOnInit, Store } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { AppState } from './states/app.states';
import { DOCUMENT } from '@angular/common';
import { Injectable, RendererFactory2, Inject, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  renderer: Renderer2;
  constructor(
    private rendererFactory: RendererFactory2,
    @Inject(DOCUMENT) private document: Document,
    private store: Store
  ) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }

  ngOnInit(): void {
    this.store
      .select(AppState.theme)
      .pipe(
        tap((theme) => {
          console.log(theme);
          switch (theme) {
            case 'dark':
              this.renderer.addClass(this.document.body, 'dark-theme');
              this.renderer.removeClass(this.document.body, 'orang-theme');
              this.renderer.removeClass(this.document.body, 'blue-theme');
              this.renderer.removeClass(this.document.body, 'purple-theme');
              this.renderer.removeClass(this.document.body, 'yelgre-theme');
              this.renderer.removeClass(this.document.body, 'salmon-theme');
              this.renderer.removeClass(this.document.body, 'summer-theme');
              break;

            case 'light':
              this.renderer.removeClass(this.document.body, 'dark-theme');
              this.renderer.removeClass(this.document.body, 'orang-theme');
              this.renderer.removeClass(this.document.body, 'blue-theme');
              this.renderer.removeClass(this.document.body, 'purple-theme');
              this.renderer.removeClass(this.document.body, 'yelgre-theme');
              this.renderer.removeClass(this.document.body, 'salmon-theme');
              this.renderer.removeClass(this.document.body, 'summer-theme');
              break;

            case 'orang':
              this.renderer.addClass(this.document.body, 'orang-theme');
              this.renderer.removeClass(this.document.body, 'dark-theme');
              this.renderer.removeClass(this.document.body, 'blue-theme');
              this.renderer.removeClass(this.document.body, 'purple-theme');
              this.renderer.removeClass(this.document.body, 'yelgre-theme');
              this.renderer.removeClass(this.document.body, 'salmon-theme');
              this.renderer.removeClass(this.document.body, 'summer-theme');
              break;
            case 'blue':
              this.renderer.addClass(this.document.body, 'blue-theme');
              this.renderer.removeClass(this.document.body, 'dark-theme');
              this.renderer.removeClass(this.document.body, 'orang-theme');
              this.renderer.removeClass(this.document.body, 'purple-theme');
              this.renderer.removeClass(this.document.body, 'yelgre-theme');
              this.renderer.removeClass(this.document.body, 'salmon-theme');
              this.renderer.removeClass(this.document.body, 'summer-theme');
              break;
            case 'purple':
              this.renderer.addClass(this.document.body, 'purple-theme');
              this.renderer.removeClass(this.document.body, 'dark-theme');
              this.renderer.removeClass(this.document.body, 'orang-theme');
              this.renderer.removeClass(this.document.body, 'blue-theme');
              this.renderer.removeClass(this.document.body, 'yelgre-theme');
              this.renderer.removeClass(this.document.body, 'salmon-theme');
              this.renderer.removeClass(this.document.body, 'summer-theme');
              break;
            case 'yelgre':
              this.renderer.addClass(this.document.body, 'yelgre-theme');
              this.renderer.removeClass(this.document.body, 'dark-theme');
              this.renderer.removeClass(this.document.body, 'orang-theme');
              this.renderer.removeClass(this.document.body, 'blue-theme');
              this.renderer.removeClass(this.document.body, 'purple-theme');
              this.renderer.removeClass(this.document.body, 'salmon-theme');
              this.renderer.removeClass(this.document.body, 'summer-theme');
              break;
            case 'salmon':
              this.renderer.addClass(this.document.body, 'salmon-theme');
              this.renderer.removeClass(this.document.body, 'dark-theme');
              this.renderer.removeClass(this.document.body, 'orang-theme');
              this.renderer.removeClass(this.document.body, 'blue-theme');
              this.renderer.removeClass(this.document.body, 'purple-theme');
              this.renderer.removeClass(this.document.body, 'yelgre-theme');
              this.renderer.removeClass(this.document.body, 'summer-theme');
              break;
            case 'summer':
              this.renderer.addClass(this.document.body, 'summer-theme');
              this.renderer.removeClass(this.document.body, 'salmon-theme');
              this.renderer.removeClass(this.document.body, 'dark-theme');
              this.renderer.removeClass(this.document.body, 'orang-theme');
              this.renderer.removeClass(this.document.body, 'blue-theme');
              this.renderer.removeClass(this.document.body, 'purple-theme');
              this.renderer.removeClass(this.document.body, 'yelgre-theme');
              break;

            default:
              break;
          }
        })
      )
      .subscribe();
  }
}
