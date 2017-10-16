import { Component, OnInit, Input } from '@angular/core';
import { SubredditService } from '../api/subreddit.service';
import { WindowService } from '../api/window.service';

@Component({
  selector: 'ms-detailed-post',
  templateUrl: './detailed-post.component.html',
  styleUrls: ['./detailed-post.component.css']
})
export class DetailedPostComponent implements OnInit {
  @Input() post: any;

  constructor(private subredditService: SubredditService, private windowService: WindowService) { }

  ngOnInit() {
  }

  goTo(url) {
      this.windowService.goTo(url);
  }
}
