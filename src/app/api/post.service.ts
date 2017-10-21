import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ApiConstantes } from './api.constantes';
import { Observable } from 'rxjs/Observable';
import { Comment } from './model/comment';
import { Post } from './model/post';

@Injectable()
export class PostService {

    constructor(private http: Http, private apiConstantes: ApiConstantes) { }

    getComments(subreddit: string, idPost: string): Observable<Comment[]> {
        const completeUrl = 
            `${this.apiConstantes.subredditBaseUrl}${subreddit}/comments/${idPost}${this.apiConstantes.apiExtension}`;
        return this.http.get(completeUrl)
            .map((r: Response) => r.json() as Comment[]);
    }

    getTypeOfPost(post: Post) {
        return post.data.post_hint;
    }

    isDisplayable(post: Post) {
        const redditHostSlashRSlash = `${this.apiConstantes.baseUrl}${this.apiConstantes.slashRSlash}`;
        const postHintIsImage = post.data.post_hint === 'image';
        const urlHostIsReddit = post.data.url.indexOf(redditHostSlashRSlash) > -1 && post.data.selftext_html;
        const urlHostIsTheSameSubreddit = post.data.url.indexOf(`${redditHostSlashRSlash}${post.data.subreddit}`) > -1; // TODO handle comments link
        return postHintIsImage || (urlHostIsReddit && urlHostIsTheSameSubreddit);
    }
}