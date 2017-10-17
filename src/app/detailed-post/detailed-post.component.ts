import { Component, OnInit, Input } from '@angular/core';
import { WindowService } from '../api/window.service';
import { DomParserService } from '../api/domparser.service';
import { PostService } from '../api/post.service';

@Component({
  selector: 'ms-detailed-post',
  templateUrl: './detailed-post.component.html',
  styleUrls: ['./detailed-post.component.css']
})
export class DetailedPostComponent implements OnInit {
  @Input() post: any;

  constructor(private domParserService: DomParserService, private windowService: WindowService, private postService: PostService) { }

  ngOnInit() {
    this.post.htmlcontent = this.domParserService.parse(this.post.data.selftext_html);
    this.post.type = this.postService.getTypeOfPost(this.post);
  }

  goTo(url) {
      this.windowService.goTo(url);
  }
}
