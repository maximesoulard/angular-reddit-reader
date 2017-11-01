import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SearchService } from '../api/search.service';
import { trigger, state, style, animate, transition } from '@angular/animations';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'ms-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  animations: [
    trigger(
      'showResultAnimation', [
        state('inactive', style({
          opacity: 0
        })),
        state('active',   style({
          opacity: 1
        })),
        transition('* => active', animate('.2s', style({ opacity: 1 }))),
        transition('* => inactive', animate('.2s', style({ opacity: 0 })))
      ]
    )
  ]
})
export class SearchComponent implements OnInit {
  subreddits: Observable<string[]>;
  results: string[] = [];
  private searchTerms = new Subject<string>();
  queryString: string;
  @Output() onSubredditClicked = new EventEmitter<string>();
  state: string;

  constructor(private searchService: SearchService) {
    this.changeState();
  }

  ngOnInit() {
    this.searchTerms
      .debounceTime(300)        // wait for 300ms pause in events
      .filter(term => !!term)
      .switchMap(term => term   // switch to new observable each time
        // return the http search observable
        ? this.searchService.searchForASubreddit(term, null)
        // or the observable of empty heroes if no search term
        : Observable.of<string[]>([]))
      .catch(error => {
        // TODO: real error handling
        console.log(`Error in component ... ${error}`);
        return Observable.of<string[]>([]);
      })
      .subscribe(results => {
        this.results = results.slice(0, 10);
        this.changeState();
      });
  }

  search(term) {
    this.searchTerms.next(term);
  }
  
  subredditClicked(sub) {
    this.onSubredditClicked.emit(sub);
    this.results = [];
    this.changeState();
  }

  closeSearchResult() {
    this.results = [];
    this.changeState();
  }  

  private changeState() {
    this.results.length > 0 ? this.state = 'active' : this.state = 'inactive';
  }
}
