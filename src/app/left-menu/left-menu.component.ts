import { Component, OnInit } from '@angular/core';
import _ from "lodash";

@Component({
  selector: 'ms-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit {
  lastVisitedSubreddits = new Set();

  constructor() { }

  ngOnInit() {}

  onSubredditClicked(subreddit: string) {
    this.lastVisitedSubreddits.add(subreddit);
  }
}
