import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ms-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit {
  lastVisitedSubreddits: string[] = [];

  constructor() { }

  ngOnInit() {}

  onSubredditClicked(subreddit: string) {
    this.lastVisitedSubreddits.push(subreddit);
  }
}
