import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../api/post.service';
import { WindowService } from '../api/window.service';

@Component({
  selector: 'ms-post',
  templateUrl: 'post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post: any;
  showDetailedPost = false;

  constructor(private postService: PostService, private windowService: WindowService) {}

  ngOnInit() {
    this.post.isDisplayable = this.postService.isDisplayable(this.post);
  }

  onClickShowDetailedPost() {
    this.showDetailedPost = !this.showDetailedPost;
  }
  
  goTo() {
    if (this.post.isDisplayable) {
      this.onClickShowDetailedPost();
    }
    else {
      this.windowService.goTo(this.post.data.url);
    }
  }
}