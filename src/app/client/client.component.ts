import { Component, OnInit,  } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { trigger, state, animate, transition, style, query } from '@angular/animations';

@Component({
  selector: 'ms-client',
  templateUrl: 'client.component.html',
  styleUrls: ['./client.component.css'],
  animations: [trigger('routerAnimation', [
          transition( '* => *', [
              query(':enter', 
                  [
                      style({ opacity: 0 })
                  ], 
                  { optional: true }
              ),
              query(':leave', 
                  [
                      style({ opacity: 1 }),
                      animate('0.2s', style({ opacity: 0 }))
                  ], 
                  { optional: true }
              ),
              query(':enter', 
                  [
                      style({ opacity: 0 }),
                      animate('0.2s', style({ opacity: 1 }))
                  ], 
                  { optional: true }
              )
          ])
      ])]
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

  getRouteAnimation(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
}
