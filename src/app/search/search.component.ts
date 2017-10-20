import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SearchService } from '../api/search.service';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';

@Component({
  selector: 'ms-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  subreddits: Observable<string[]>;
  results: any[];
  private searchTerms = new Subject<string>();
  queryString: string;
  @Output() onSubredditClicked = new EventEmitter<string>();

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.searchTerms
      .debounceTime(300)        // wait for 300ms pause in events
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
      .map(results => results.slice(5))
      .subscribe(results => {
        this.results = results;
      });
  }

  search(term) {
    // this.searchService.searchForASubreddit(this.queryString, null);
    this.searchTerms.next(term);
  }
  
  subredditClicked(sub) {
    this.onSubredditClicked.emit(sub);
    this.results = [];
  }
}
