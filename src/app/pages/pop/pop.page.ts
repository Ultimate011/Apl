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

export interface Track {
  name: string;
  path: string;
  artist: string;
  album: string;
}

/*declare function playBtn(): void; */
declare var playBtn;

@Component({
  selector: 'app-pop',
  templateUrl: './pop.page.html',
  styleUrls: ['./pop.page.scss'],
})

export class PopPage implements OnInit {
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
  ];

  activeTrack: Track = null;
  player: Howl = null;
  isPlaying = false;
  progress = 0;
  @ViewChild('range', { static: false }) range: IonRange;

  CallplayBtn() {
    playBtn();
  }

  constructor(firestore: Firestore) {
    const ref = collection(firestore, 'tracks');
    const q = query(ref, where('genre', '==', 'Pop'));
    this.item$ = collectionData(q);

    this.item$
      .pipe(
        tap((items) => {
          console.log(items);
        })
      )
      .subscribe();
  }

  start(track: Track) {
    if (this.player) {
      this.player.stop();
    }
    this.player = new Howl({
      src: [track.path],
      html5: true,
      onplay: () => {
        this.isPlaying = true;
        this.activeTrack = track;
        this.updateProgress;
      },
      onend: () => {},
    });
    this.player.play();
  }

  togglePlayer(pause) {
    this.isPlaying = !pause;
    if (pause) {
      this.player.pause();
    } else {
      this.player.play();
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
