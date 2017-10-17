import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConstantes } from './api.constantes';

@Injectable()
export class SubredditService {

    constructor(private http: HttpClient, private apiConstantes: ApiConstantes) { }

    get(subreddit: string, mode: string) {
        if (subreddit !== null) {
            const completeSubredditToLoad = `/r/${subreddit}/${mode !== null ? mode : this.apiConstantes.modeHot}`
            return this.getPosts(completeSubredditToLoad);
        }
        else {
            return this.getRAll();
        }
    }

    getRAll() {
        return this.http.get(this.apiConstantes.rAll);
    }

    getPosts(subreddit: string) {
        const url = `${this.apiConstantes.baseUrl}${subreddit}${this.apiConstantes.apiExtension}`;
        return this.http.get(url);
    }

    getTrendingSubreddits() {
        const url = `${this.apiConstantes.baseUrl}/api/trending_subreddits${this.apiConstantes.apiExtension}`;
        return this.http.get(url);
    }

    getSubredditUrl(subreddit: string) {
        return Observable.create(observer => {
            const url = `${this.apiConstantes.baseUrl}${this.apiConstantes.slashRSlash}${subreddit}`;
            observer.next(url);
          });
    }
}