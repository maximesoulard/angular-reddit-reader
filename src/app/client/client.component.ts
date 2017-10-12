import { Component, OnInit,  } from '@angular/core';
import { SubredditService } from '../api/subreddit.service';

@Component({
  selector: 'ms-client',
  templateUrl: 'client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  posts: object[];

  constructor(private subredditService: SubredditService) {}

  ngOnInit() {
    this.subredditService.getNewPosts("/r/all").subscribe(response => {
      // Read the result field from the JSON response.
      this.posts = response['data'].children;
    });
  }
}
