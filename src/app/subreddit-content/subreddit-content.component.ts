import { Component, OnInit, Input } from '@angular/core';
import { SubredditService } from '../api/subreddit.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'ms-subreddit-content',
  templateUrl: './subreddit-content.component.html',
  styleUrls: ['./subreddit-content.component.css']
})
export class SubredditContentComponent implements OnInit {
  posts: object[];
  subreddit: string;
  mode: string;
  
  constructor(private subredditService: SubredditService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.subreddit = params.get('subreddit');
      this.mode = params.get('mode');
      this.subredditService.get(this.subreddit, this.mode)
        .subscribe(response => {
          this.posts = response['data'].children;
        });
    });
  }
}
