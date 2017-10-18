import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConstantes } from './api.constantes';

@Injectable()
export class PostService {

    constructor(private http: HttpClient, private apiConstantes: ApiConstantes) { }

    getComments(subreddit: string, idPost: string, title: string) {
        const completeUrl = `${this.apiConstantes.subredditBaseUrl}${subreddit}/comments/${idPost}/${title}${this.apiConstantes.apiExtension}`;
        return this.http.get(completeUrl);
    }

    getTypeOfPost(post: any) {
        return post.data.post_hint;
    }

    isDisplayable(post: any) {
        const redditHostSlashRSlash = `${this.apiConstantes.baseUrl}${this.apiConstantes.slashRSlash}`;
        const postHintIsImage = post.data.post_hint === 'image';
        const urlHostIsReddit = post.data.url.indexOf(redditHostSlashRSlash) > -1 && post.data.selftext_html;
        const urlHostIsTheSameSubreddit = post.data.url.indexOf(`${redditHostSlashRSlash}${post.data.subreddit}`) > -1; // TODO handle comments link
        return postHintIsImage || (urlHostIsReddit && urlHostIsTheSameSubreddit);
    }
}