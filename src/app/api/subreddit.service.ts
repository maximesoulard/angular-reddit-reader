import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ApiConstantes } from './api.constantes';
import { Subreddit } from './model/subreddit'
import { Post } from './model/post';

@Injectable()
export class SubredditService {

    constructor(private http: Http, private apiConstantes: ApiConstantes) { }

    get(subreddit: string, mode: string) {
        if (subreddit !== null) {
            const completeSubredditToLoad = `/r/${subreddit}/${mode !== null ? mode : this.apiConstantes.modeHot}`
            return this.getPosts(completeSubredditToLoad);
        }
        else {
            return this.getRAll();
        }
    }

    getRAll(): Observable<Post[]> {
        return this.http.get(this.apiConstantes.rAll)
            .map((r: Response) => r.json().data.children as Post[]);
    }

    getPosts(subreddit: string): Observable<Post[]> {
        const url = `${this.apiConstantes.baseUrl}${subreddit}${this.apiConstantes.apiExtension}`;
        return this.http.get(url)
            .map((r: Response) => r.json().data.children as Post[]);
    }

    getTrendingSubreddits(): Observable<string[]> {
        const url = `${this.apiConstantes.baseUrl}/api/trending_subreddits${this.apiConstantes.apiExtension}`;
        return this.http.get(url)
            .map((r: Response) => r.json().subreddit_names as string[]);
    }

    getSubredditUrl(subreddit: string) {
        return Observable.create(observer => {
            const url = `${this.apiConstantes.baseUrl}${this.apiConstantes.slashRSlash}${subreddit}`;
            observer.next(url);
          });
    }
}