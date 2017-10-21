import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../api/post.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Comment } from '../api/model/comment';
import { DomParserService } from '../api/domparser.service';

@Component({
  selector: 'ms-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() comment: Comment;
  replies: Comment;

  constructor(private domParserService: DomParserService) { }

  ngOnInit() {
    console.log(this.comment.data)
    if (this.comment.data && this.comment.data.body_html)
      this.comment.data.body_html = this.domParserService.parse(this.comment.data.body_html);
    if (this.comment.data.replies) {
      this.replies = this.comment.data.replies;
    }
  }
}