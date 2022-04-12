import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { NgxsModule } from '@ngxs/store';
import { environment } from 'src/environments/environment';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { AppState } from './states/app.states';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
      NgxsStoragePluginModule.forRoot({key:['app']}),  
      NgxsLoggerPluginModule.forRoot(),
        NgxsModule.forRoot([AppState], {
          developmentMode: !environment.production
        }),

    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    provideFirebaseApp(() =>
      initializeApp({
        apiKey: 'AIzaSyArqHCcCTrST7to4mHb2c1rbeIlJbkb5WI',
        authDomain: 'fria-play.firebaseapp.com',
        projectId: 'fria-play',
        storageBucket: 'fria-play.appspot.com',
        messagingSenderId: '122243269622',
        appId: '1:122243269622:web:5ddfd3e1a4b014e793fdd7',
        measurementId: 'G-7NPDN2K613',
      })
    ),
    provideFirestore(() => getFirestore()),
  ],

  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
