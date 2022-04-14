import { ThemeService } from './../services/theme.service';
import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  constructor(private theme: ThemeService, private location: Location) {}

  enableDark() {
    this.theme.enableDark();
  }

  enableLight() {
    this.theme.enableLight();
  }

  enableOrang() {
    this.theme.enableOrang();
  }

  myBackButton() {
    this.location.back();
  }
}
