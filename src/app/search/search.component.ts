import { Component, OnInit } from '@angular/core';
import { SearchService } from '../api/search.service';

@Component({
  selector: 'ms-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  queryString: string;

  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

  search() {
    this.searchService.searchForASubreddit(this.queryString, null);
  }

}
