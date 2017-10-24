import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ApiConstantes } from './api.constantes';
import { Subreddit } from './model/subreddit'
import { Post } from './model/post';
import { HttpClient } from '@angular/common/http';
import { TrendingSubreddits } from './model/trendingSubreddits';

import 'rxjs/add/operator/map'

@Injectable()
export class SubredditService {

    constructor(private http: HttpClient, private apiConstantes: ApiConstantes) { }

    get(subreddit: string, mode: string): Observable<Array<Post>> {
        if (subreddit !== null) {
            const completeSubredditToLoad = `/r/${subreddit}/${mode !== null ? mode : this.apiConstantes.modeHot}`
            return this.getPosts(completeSubredditToLoad);
        }
        else {
            return this.getRAll();
        }
    }

    getRAll(): Observable<Array<Post>> {
        return this.http.get<SubredditContentResponse>(this.apiConstantes.rAll)
            .map((r: SubredditContentResponse) => r.data.children as Post[]);
    }

    getPosts(subreddit: string): Observable<Array<Post>> {
        const url = `${this.apiConstantes.baseUrl}${subreddit}${this.apiConstantes.apiExtension}`;
        return this.http.get<SubredditContentResponse>(url)
            .map((r: SubredditContentResponse) => r.data.children as Post[]);
    }

    getTrendingSubreddits(): Observable<string[]> {
        const url = `${this.apiConstantes.baseUrl}/api/trending_subreddits${this.apiConstantes.apiExtension}`;
        return this.http.get<TrendingSubreddits>(url)
            .map((ts: TrendingSubreddits) => {
                return ts.subreddit_names;
            });
    }

    getSubredditUrl(subreddit: string): Observable<string> {
        return Observable.create(observer => {
            const url = `${this.apiConstantes.baseUrl}${this.apiConstantes.slashRSlash}${subreddit}`;
            observer.next(url);
          });
    }
}

interface SubredditContentResponse {
    data: Data
}

interface Data {
    children: Post[]
}
