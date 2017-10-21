import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../api/post.service';
import { WindowService } from '../api/window.service';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Post } from '../api/model/post';

@Component({
  selector: 'ms-post',
  templateUrl: 'post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  @Input() post: Post;
  showDetailedPost = false;
  state = 'inactive';

  constructor(private postService: PostService, private windowService: WindowService) {}

  ngOnInit() {
    this.post.isDisplayable = this.postService.isDisplayable(this.post);
  }

  onClickShowDetailedPost() {
    this.showDetailedPost = !this.showDetailedPost;
    this.state = this.showDetailedPost ? 'active' : 'inactive';
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