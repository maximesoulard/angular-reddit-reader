import { Component, OnInit,  } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'ms-client',
  templateUrl: 'client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  subreddit: string;
  mode: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.subreddit = params.get('subreddit');
      this.mode = params.get('mode');
    });
  }

  ngOnChange() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.subreddit = params.get('subreddit');
      this.mode = params.get('mode');
    });
  }
}
