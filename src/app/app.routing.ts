import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AutoComponent } from './auto/auto.component';
import { HomesComponent } from './homes/homes.component';
import { MusicComponent } from './music/music.component';
import { DatingComponent } from './dating/dating.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'auto',
    component: AutoComponent
  },
  {
    path: 'homes',
    component: HomesComponent
  },
  {
    path: 'music',
    component: MusicComponent
  },
  {
    path: 'dating',
    component: DatingComponent
  },

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
