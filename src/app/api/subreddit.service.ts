import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = "https://www.reddit.com";
const API_EXTENSION = '.json';
const SLASH_R_SLASH = "/r/"

@Injectable()
export class SubredditService {

    constructor(private http: HttpClient) { }

    getNewPosts(subreddit: string) {
        return this.http.get(BASE_URL
            .concat(subreddit)
            .concat(API_EXTENSION));
    }

    getTrendingSubreddits() {
        return this.http.get(BASE_URL
            .concat('/api/trending_subreddits')
            .concat(API_EXTENSION));
    }

    getSubredditUrl(subreddit: string) {
        return Observable.create(observer => {
            const url = BASE_URL
                .concat(SLASH_R_SLASH)
                .concat(subreddit);
            observer.next(url);
          });
    }
}