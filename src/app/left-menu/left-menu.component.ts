import { Component, OnInit } from '@angular/core';
import { SubredditService } from '../api/subreddit.service';
import { WindowService } from '../api/window.service';

@Component({
  selector: 'ms-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit {

  trendingSubreddits: string[];
  subredditUrlToComplete = "https://www.reddit.com/r/";

  constructor(private subredditService: SubredditService, private windowService: WindowService) { }

  ngOnInit() {
    this.subredditService.getTrendingSubreddits()
      .subscribe((response: any) => {
        this.trendingSubreddits = response.subreddit_names;
      });
  }

  goTo(sub) {
    this.subredditService.getSubredditUrl(sub)
      .subscribe((url) => {
        this.windowService.goTo(url);
      });
  }

}
