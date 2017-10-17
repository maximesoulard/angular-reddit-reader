import { Component, OnInit, Input } from '@angular/core';
import { SubredditService } from '../api/subreddit.service';

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
      .subscribe((response: any) => {
        this.trendingSubreddits = response.subreddit_names;
      });
  }
}
