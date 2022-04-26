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
  playlist: Track[] = [
    {
      name: 'Ending Theme',
      path: '../../../assets/Ending Theme  Octopath Traveler OST.mp3',
      artist: 'Yasunori Nishiki',
      album: 'Octopath Traveler',
    },
    {
      name: 'A star in the morning sky',
      path: '../../../assets/FE Three Houses OST  91 A Star in the Morning Sky.mp3',
      artist: 'Rei Kondoh',
      album: 'Fire Emblem Three Houses',
    },
    {
      name: 'Conquest',
      path: '../../../assets/21. Conquest (Calm_Ablaze) (Fates Version) _【Fire Emblem Fates OST_ Map Themes Mixed】 【HQ 1080p】 (1).mp3',
      artist: 'Rei Kondoh',
      album: 'Fire Emblem Awakening',
    },
    {
      name: 'Dusk Falls',
      path: '../../../assets/5. Dusk Falls (Calm_Fire) _【Fire Emblem Fates OST_ Map Themes Mixed】 【HQ 1080p】.mp3',
      artist: 'Rei Kondoh',
      album: 'Fire Emblem Fates',
    },
    {
      name: 'March to Deliverance',
      path: '../../../assets/BGM_0000008E [1].mp3',
      artist: 'Takafumi Wada',
      album: 'Fire Emblem Echoes',
    },
    {
      name: 'Left Alone',
      path: '../../../assets/Terraria Calamity Mod Music - Left Alone - Theme of Brimstone Elemental.mp3',
      artist: 'DM DOKURO',
      album: 'Calamity Mod',
    },
    {
      name: 'Leviathan Trilogy',
      path: '../../../assets/Terraria Calamity Mod Music - Leviathan Trilogy.mp3',
      artist: 'DM DOKURO',
      album: 'Calamity Mod',
    },
    {
      name: 'Elysium in the Dream',
      path: '../../../assets/Elysium in the Dream - Xenoblade Chronicles 2 OST [007].mp3',
      artist: 'Yasunori Mitsuda',
      album: 'Xenoblade Chronicles 2',
    },
    {
      name: 'In This Cruel Land',
      path: '../../../assets/In This Cruel Land.mp3',
      artist: 'Yuki Kajiura',
      album: 'Sword Art Online',
    },
    {
      name: 'Gunland',
      path: '../../../assets/Gunland.mp3',
      artist: 'Yuki Kajiura',
      album: 'Sword Art Online',
    },
    {
      name: 'Sea-P-U Remix',
      path: "../../../assets/'Sea-P-U' Blitz It! by the Chirpy Chips (Remix) - Splatoon 2.mp3",
      artist: 'Sheddy',
      album: 'Splatoon 2 Remixes',
    },
    {
      name: 'Void',
      path: '../../../assets/Terraria Calamity Mod Music - _void_ - Theme of The Lower Abyss.mp3',
      artist: 'DM DOKURO',
      album: 'Calamity Mod',
    },
    {
      name: "I Wanna' Go Home - Eng Cover",
      path: "../../../assets/ENGLISH _I Wanna' Go Home_ KonoSuba (Akane Sasu Sora).mp3",
      artist: 'Akane Sasu Sora',
      album: 'Konosuba',
    },
  ];

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
          console.log(items);
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
    if (this.player) {
      this.player.stop();
    }

    if (this.activeTrack?.path !== track.path) {
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
    let index = this.playlist.indexOf(this.activeTrack);
    if (index != this.playlist.length - 1) {
      this.start(this.playlist[index + 1]);
    } else {
      this.start(this.playlist[0]);
    }
  }

  prev() {
    let index = this.playlist.indexOf(this.activeTrack);
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

  updateProgress() {
    let seek = this.player.seek();
    this.progress = (seek / this.player.duration()) * 100 || 0;
    setTimeout(() => {
      this.updateProgress();
    }, 1000);
  }

  ngOnInit() {}
}
