import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClientComponent } from './client/client.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'r/:subreddit', component: ClientComponent }
];