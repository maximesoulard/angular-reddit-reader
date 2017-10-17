import { Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { SubredditContentComponent } from './subreddit-content/subreddit-content.component';

export const ROUTES: Routes = [
  { path: '', component: SubredditContentComponent },
  { path: 'r/:subreddit', component: SubredditContentComponent },
  { path: 'r/:subreddit/:mode', component: SubredditContentComponent }
];