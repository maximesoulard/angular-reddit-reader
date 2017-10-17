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
        return post.data.post_hint === 'image' 
            || post.data.url.indexOf(`${this.apiConstantes.baseUrl}${this.apiConstantes.slashRSlash}`) > -1;
    }
}