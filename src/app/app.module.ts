import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TXGHeaderComponent } from './components/header.component';
import { TXGFooterComponent } from './components/footer.component';
import { TXGLandingComponent } from './components/landing.component';
import { TXGRoadmapComponent } from './components/roadmap.component';
import { TXGGoalsComponent } from './components/goals.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MaterialModule} from './material.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { CountDownComponent } from './components/countdown.component';

@NgModule({
  declarations: [
    AppComponent,
    TXGHeaderComponent,
    TXGFooterComponent,
    TXGLandingComponent,
    TXGRoadmapComponent,
    TXGGoalsComponent,
    CountDownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
