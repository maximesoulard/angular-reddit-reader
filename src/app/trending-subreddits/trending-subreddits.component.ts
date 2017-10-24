import { Component, OnInit, Input } from '@angular/core';
import { SubredditService } from '../api/subreddit.service';
import { TrendingSubreddits } from '../api/model/trendingSubreddits';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'ms-trending-subreddits',
  templateUrl: './trending-subreddits.component.html',
  styleUrls: ['./trending-subreddits.component.css']
})
export class TrendingSubredditsComponent implements OnInit {

  trendingSubreddits: Observable<string[]>;

  constructor(private subredditService: SubredditService) { }
  
  ngOnInit() {
    // subreddit_names
    this.trendingSubreddits = this.subredditService.getTrendingSubreddits();
  }
}
