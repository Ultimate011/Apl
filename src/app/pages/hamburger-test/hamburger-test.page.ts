import { Howl } from 'howler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonRange } from '@ionic/angular';
import { createAnimation, Animation } from '@ionic/core';
import {
  Firestore,
  collectionData,
  collection,
  query,
  where,
} from '@angular/fire/firestore';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { ThemeService } from '../../services/theme.service';

export interface Track {
  name: string;
  path: string;
  artist: string;
  album: string;
}

/*declare function playBtn(): void; */
declare var playBtn;

@Component({
  selector: 'app-hamburger-test',
  templateUrl: './hamburger-test.page.html',
  styleUrls: ['./hamburger-test.page.scss'],
})
export class HamburgerTestPage implements OnInit {
  item$: Observable<any[]>;
  playlist: Track[];

  activeTrack: Track = null;
  player: Howl = null;
  isPlaying = false;
  progress = 0;
  @ViewChild('range', { static: false }) range: IonRange;

  CallplayBtn() {
    playBtn();
  }

  constructor(firestore: Firestore, private theme: ThemeService) {
    const ref = collection(firestore, 'tracks');
    const q = query(ref, where('track', '==', '1'));
    this.item$ = collectionData(q);

    this.item$
      .pipe(
        tap((items) => {
          this.playlist = items;
        })
      )
      .subscribe();
  }

  enableButtonchange() {
    this.theme.enableButtonchange();
  }

  enableHamburger() {
    this.theme.enableDisc_icon_change();
  }

  enableHamburger2() {
    this.theme.enableDisc_icon_change2();
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

  start(track: any) {
    if (this.activeTrack?.path !== track.path) {
      if (this.player) {
        this.player.stop();
      }

      this.player = new Howl({
        src: [track.path],
        html5: true,
        onplay: () => {
          this.isPlaying = true;
          this.activeTrack = track;
          this.updateProgress();
        },
        onend: () => {},
      });
    }

    this.player.play();
    const disk: HTMLDivElement = document.querySelector('.disk');
    disk.style.backgroundImage = `url('${track.img}')`;
  }

  togglePlayer(pause, track: any) {
    this.isPlaying = !pause;

    if (pause) {
      this.player.pause();
    } else {
      this.start(track);
    }
  }

  next() {
    let index = this.playlist.findIndex(
      (s) => s.path === this.activeTrack.path
    );

    if (index != this.playlist.length - 1) {
      this.start(this.playlist[index + 1]);
    } else {
      this.start(this.playlist[0]);
    }
  }

  prev() {
    let index = this.playlist.findIndex(
      (s) => s.path === this.activeTrack.path
    );

    if (index > 0) {
      this.start(this.playlist[index - 1]);
    } else {
      this.start(this.playlist[this.playlist.length - 1]);
    }
  }

  seek() {
    let newValue = +this.range.value;
    let duration = this.player.duration();
    this.player.seek(duration * (newValue / 100));
  }

  updateProgress(lastProgress = 0) {
    let seek = this.player.seek();
    this.progress = (seek / this.player.duration()) * 100;

    if (lastProgress !== 0 && this.progress === 0) {
      this.next();
    }

    setTimeout(() => {
      this.updateProgress(this.progress);
    }, 1000);
  }

  ngOnInit() {}
}
