import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../api/post.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'ms-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  comments: any[];

  constructor(private postService: PostService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.postService.getComments(params.get('subreddit'), params.get('postId'))
        .subscribe((response: any[]) => {
          this.comments = response;
        });
    });
  }

}
