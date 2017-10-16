import { Component, OnInit } from '@angular/core';
import { SubredditService } from '../api/subreddit.service';

@Component({
  selector: 'ms-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit {

  trendingSubreddits: string[];

  constructor(private subredditService: SubredditService) { }

  ngOnInit() {
    this.subredditService.getTrendingSubreddits()
      .subscribe((response: any) => {
        this.trendingSubreddits = response.subreddit_names;
      });
  }

}
