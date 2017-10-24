import { Component, OnInit, Input } from '@angular/core';
import { SubredditService } from '../api/subreddit.service';
import { TrendingSubreddits } from '../api/model/trendingSubreddits';

@Component({
  selector: 'ms-trending-subreddits',
  templateUrl: './trending-subreddits.component.html',
  styleUrls: ['./trending-subreddits.component.css']
})
export class TrendingSubredditsComponent implements OnInit {

  trendingSubreddits: string[];

  constructor(private subredditService: SubredditService) { }
  
  ngOnInit() {
    this.subredditService.getTrendingSubreddits()
      .subscribe((trendingSubreddits: TrendingSubreddits) => {
        this.trendingSubreddits = trendingSubreddits.subreddit_names;
      });
  }
}
