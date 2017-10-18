import { Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { SubredditContentComponent } from './subreddit-content/subreddit-content.component';
import { CommentComponent } from './comment/comment.component';
import { SearchContentComponent } from './search-content/search-content.component';

export const ROUTES: Routes = [
  { path: '', component: SubredditContentComponent },
  { path: 'r/:subreddit', component: SubredditContentComponent },
  { path: 'r/:subreddit/:mode', component: SubredditContentComponent },
  { path: 'r/:subreddit/comments/:postId/:title', component: CommentComponent },
  { path: 'search/:query', component:  SearchContentComponent}
];