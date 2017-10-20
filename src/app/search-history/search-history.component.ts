import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ms-search-history',
  templateUrl: './search-history.component.html',
  styleUrls: ['./search-history.component.css']
})
export class SearchHistoryComponent implements OnInit {

  @Input() lastVisitedSubreddits: string[];

  constructor() { }

  ngOnInit() {
  }

}
