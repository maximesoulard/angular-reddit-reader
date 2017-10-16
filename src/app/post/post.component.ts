// import { Reddit } from 'typings/reddit';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ms-post',
  templateUrl: 'post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post: any;
  showDetailedPost = false;

  constructor() {}

  ngOnInit() {
  }

  onClickShowDetailedPost() {
    this.showDetailedPost = !this.showDetailedPost;
  }
}