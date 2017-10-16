import { Component, OnInit,  } from '@angular/core';
import { SubredditService } from '../api/subreddit.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'ms-client',
  templateUrl: 'client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  posts: object[];

  constructor(private subredditService: SubredditService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.subredditService.get(params.get('subreddit'))
        .subscribe(response => {
          this.posts = response['data'].children;
        });
    });
  }
}
