import { ThemeService } from '../../services/theme.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-test4',
  templateUrl: './test4.page.html',
  styleUrls: ['./test4.page.scss'],
})
export class Test4Page implements OnInit {
  constructor(private theme: ThemeService, private location: Location) {}

  ngOnInit() {}

  enableOrang() {
    this.theme.enableOrang();
  }

  enableBlue() {
    this.theme.enableBlue();
  }

  enablePurple() {
    this.theme.enablePurple();
  }

  enableYelgre() {
    this.theme.enableYelgre();
  }

  enableSalmon() {
    this.theme.enableSalmon();
  }

  enableYelblu() {
    this.theme.enableSummer();
  }

  myBackButton() {
    this.location.back();
  }
}
