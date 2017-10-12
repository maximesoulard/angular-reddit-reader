import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SubredditService {
    
    constructor(private http: HttpClient) { }

    getNewPosts(subreddit: string) {
        return this.http.get('https://www.reddit.com/r/all/hot.json');
    }

}