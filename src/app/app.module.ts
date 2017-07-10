import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { routing } from './app.routing';
import { AutoComponent } from './auto/auto.component';
import { HomesComponent } from './homes/homes.component';
import { MusicComponent } from './music/music.component';
import { DatingComponent } from './dating/dating.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AutoComponent,
    HomesComponent,
    MusicComponent,
    DatingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
