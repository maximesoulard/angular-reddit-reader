import { Component, OnInit, Input } from '@angular/core';
import { SubredditService } from '../api/subreddit.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subreddit } from '../api/model/subreddit';
import { trigger, state, animate, transition, style, query } from '@angular/animations';
import { Post } from '../api/model/post';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'ms-subreddit-content',
  templateUrl: './subreddit-content.component.html',
  styleUrls: ['./subreddit-content.component.css'],
  animations: [trigger('routerAnimation', [
          transition( '* => *', [
              query(':enter', 
                  [
                      style({ opacity: 0 })
                  ], 
                  { optional: true }
              ),
              query(':leave', 
                  [
                      style({ opacity: 1 }),
                      animate('0.2s', style({ opacity: 0 }))
                  ], 
                  { optional: true }
              ),
              query(':enter', 
                  [
                      style({ opacity: 0 }),
                      animate('0.2s', style({ opacity: 1 }))
                  ], 
                  { optional: true }
              )
          ])
      ])]
})
export class SubredditContentComponent implements OnInit {
  posts: Observable<Post[]>;
  subreddit: string;
  mode: string;
  
  constructor(private subredditService: SubredditService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.subreddit = params.get('subreddit');
      this.mode = params.get('mode');
      this.posts = this.subredditService.get(this.subreddit, this.mode);
    });
  }
}
