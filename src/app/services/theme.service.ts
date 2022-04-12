import { DOCUMENT } from '@angular/common';
import { Injectable, RendererFactory2, Inject, Renderer2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  renderer: Renderer2; 
  constructor(private rendererFactory: RendererFactory2, @Inject(DOCUMENT) private document: Document) { 
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }
  
  enableDark() {
    this.renderer.addClass(this.document.body, 'dark-theme');
    this.renderer.removeClass(this.document.body, 'orang-theme');
    this.renderer.removeClass(this.document.body, 'blue-theme');
    this.renderer.removeClass(this.document.body, 'purple-theme');
    this.renderer.removeClass(this.document.body, 'yelgre-theme');
    this.renderer.removeClass(this.document.body, 'salmon-theme');
  }
  
  
  enableLight() {
    this.renderer.removeClass(this.document.body, 'dark-theme');
    this.renderer.removeClass(this.document.body, 'orang-theme');
    this.renderer.removeClass(this.document.body, 'blue-theme');
    this.renderer.removeClass(this.document.body, 'purple-theme');
    this.renderer.removeClass(this.document.body, 'yelgre-theme');
    this.renderer.removeClass(this.document.body, 'salmon-theme');
  }

  enableOrang() {
    this.renderer.addClass(this.document.body, 'orang-theme');
    this.renderer.removeClass(this.document.body, 'dark-theme');
    this.renderer.removeClass(this.document.body, 'blue-theme');
    this.renderer.removeClass(this.document.body, 'purple-theme');
    this.renderer.removeClass(this.document.body, 'yelgre-theme');
    this.renderer.removeClass(this.document.body, 'salmon-theme');
  }

  enableBlue() {
    this.renderer.addClass(this.document.body, 'blue-theme');
    this.renderer.removeClass(this.document.body, 'dark-theme');
    this.renderer.removeClass(this.document.body, 'orang-theme');
    this.renderer.removeClass(this.document.body, 'purple-theme');
    this.renderer.removeClass(this.document.body, 'yelgre-theme');
    this.renderer.removeClass(this.document.body, 'salmon-theme');
  }

  enablePurple() {
    this.renderer.addClass(this.document.body, 'purple-theme');
    this.renderer.removeClass(this.document.body, 'dark-theme');
    this.renderer.removeClass(this.document.body, 'orang-theme');
    this.renderer.removeClass(this.document.body, 'blue-theme');
    this.renderer.removeClass(this.document.body, 'yelgre-theme');
    this.renderer.removeClass(this.document.body, 'salmon-theme');
  }

  enableYelgre() {
    this.renderer.addClass(this.document.body, 'yelgre-theme');
    this.renderer.removeClass(this.document.body, 'dark-theme');
    this.renderer.removeClass(this.document.body, 'orang-theme');
    this.renderer.removeClass(this.document.body, 'blue-theme');
    this.renderer.removeClass(this.document.body, 'purple-theme');
    this.renderer.removeClass(this.document.body, 'salmon-theme');
  }

  enableSalmon() {
    this.renderer.addClass(this.document.body, 'salmon-theme');
    this.renderer.removeClass(this.document.body, 'dark-theme');
    this.renderer.removeClass(this.document.body, 'orang-theme');
    this.renderer.removeClass(this.document.body, 'blue-theme');
    this.renderer.removeClass(this.document.body, 'purple-theme');
    this.renderer.removeClass(this.document.body, 'yelgre-theme');
  }

}