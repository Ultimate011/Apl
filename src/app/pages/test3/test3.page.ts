import { ThemeService } from '../../services/theme.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test3',
  templateUrl: './test3.page.html',
  styleUrls: ['./test3.page.scss'],
})
export class Test3Page implements OnInit {

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

}
