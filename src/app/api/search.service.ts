import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { ApiConstantes } from './api.constantes';
import { Subreddit } from './model/subreddit';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchService {
    constructor(private http: Http, private apiConstantes: ApiConstantes) { }
    
    searchForASubreddit(q: string, sort: string): Observable<string[]> {
        sort = sort !== null ? sort : 'relevance';
        return this.http
            .get(`${this.apiConstantes.search}?q=${q}&sort=${sort}`)
            .map(res => res.json())
            .map(((response: Subreddit) => {
                const subreddits = response.data.children.map(child => {
                    return child.data.display_name;
                });
                return subreddits;
            }));
    }
}
