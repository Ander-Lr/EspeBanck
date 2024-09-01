import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, provideFirebaseApp(() => initializeApp({"projectId":"esperanza-bd","appId":"1:482012383025:web:efd7e1e6cb052f5276d210","storageBucket":"esperanza-bd.appspot.com","apiKey":"AIzaSyAje6ZIK9FYZls5F_XDT7GHNiPUvh1Icts","authDomain":"esperanza-bd.firebaseapp.com","messagingSenderId":"482012383025","measurementId":"G-2KCSWZ4GH9"})), provideFirestore(() => getFirestore())],
  bootstrap: [AppComponent],
})
export class AppModule {}
