import { ThemeService } from '../../services/theme.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {

  constructor(private theme: ThemeService) { }

  ngOnInit() {
  }

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

}
