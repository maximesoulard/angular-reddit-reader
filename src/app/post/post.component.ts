import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../api/post.service';
import { WindowService } from '../api/window.service';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Post } from '../api/model/post';
import { EmbedService } from '../api/embed.service';
import { EmbeddedFactory } from '../api/model/embedded';

@Component({
  selector: 'ms-post',
  templateUrl: 'post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  @Input() post: Post;
  showDetailedPost = false;
  state = 'inactive';

  constructor(private windowService: WindowService, 
    private embedService: EmbedService) {}

  ngOnInit() {
    if (EmbeddedFactory.getInstance(this.post) != null)
      this.post.isDisplayable = true;
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