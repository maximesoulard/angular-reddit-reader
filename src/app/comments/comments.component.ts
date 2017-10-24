import { Component, OnInit } from '@angular/core';
import { PostService } from '../api/post.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Comment } from '../api/model/comment';
import { trigger, state, animate, transition, style, query } from '@angular/animations';
import { Location } from '@angular/common';
import { Post } from '../api/model/post';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/first';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
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
export class CommentsComponent implements OnInit {
  private subreddit: string;
  private postId: string;
  comments: Observable<Comment[]>;
  post: Post;

  constructor(private postService: PostService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.subreddit = params.get('subreddit');
      this.postId = params.get('postId');
      this.comments = this.postService.getComments(this.subreddit, this.postId)
        .do((cs) => {
          this.post = new Post();
          this.post.data = cs[0].data.children[0].data;
        })
        .map((cs) => cs.slice(1));
    });
  }

  goBack() {
    this.location.back();
  }

}
