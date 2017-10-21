import { Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { SubredditContentComponent } from './subreddit-content/subreddit-content.component';
import { CommentsComponent } from './comments/comments.component';

export const ROUTES: Routes = [
  { path: '', component: SubredditContentComponent},
  { path: 'r/:subreddit', redirectTo: 'r/:subreddit/hot'},
  { path: 'r/:subreddit/:mode', component: SubredditContentComponent, data: { animation: 'subreddit' } },
  { path: 'r/:subreddit/comments/:postId', component: CommentsComponent, data: { animation: 'comment' } },
  { path: 'search/result/r/:subreddit', component:  SubredditContentComponent, data: { animation: 'subreddit' } },
  { path: 'trending/r/:subreddit', component:  SubredditContentComponent, data: { animation: 'subreddit' }}
  // { path: '**', component: NotFound } TODO 404 Component
];