import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ApiConstantes } from './api.constantes';
import { Observable } from 'rxjs/Observable';
import { Comment } from './model/comment';
import { Post } from './model/post';
import { SafeHtml } from '@angular/platform-browser';
import { DomParserService } from './domparser.service';

@Injectable()
export class PostService {

    constructor(private http: Http, private apiConstantes: ApiConstantes, private domParser: DomParserService) { }

    getComments(subreddit: string, idPost: string): Observable<Comment[]> {
        const completeUrl = 
            `${this.apiConstantes.subredditBaseUrl}${subreddit}/comments/${idPost}${this.apiConstantes.apiExtension}`;
        return this.http.get(completeUrl)
            .map((r: Response) => r.json() as Comment[]);
    }

    getTypeOfPost(post: Post) {
        return post.data.post_hint;
    }
}