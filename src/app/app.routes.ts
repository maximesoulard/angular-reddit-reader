import { Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';

export const ROUTES: Routes = [
  { path: '', component: ClientComponent },
  { path: 'r/:subreddit', component: ClientComponent },
  { path: 'r/:subreddit/:mode', component: ClientComponent }
];