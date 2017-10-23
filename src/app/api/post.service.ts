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

    isDisplayable(post: Post) {
        const redditHostSlashRSlash = `${this.apiConstantes.baseUrl}${this.apiConstantes.slashRSlash}`;
        const postHintIsImage = post.data.post_hint === 'image';
        // const urlHostIsTheSameSubreddit = post.data.url.indexOf(`${redditHostSlashRSlash}${post.data.subreddit}`) > -1;
        return postHintIsImage || post.data.selftext_html != null || post.data.secure_media_embed.content != null;
    }

    getContentToDisplay(post: Post): SafeHtml|string {
        let stuffToDisplay: SafeHtml | string;
        if (this.isDisplayable(post)) {
            if (post.data.secure_media_embed != null && post.data.secure_media_embed.content != null)
                stuffToDisplay = this.domParser.parse(post.data.secure_media_embed.content);
            else if (post.data.selftext_html != null)
                stuffToDisplay = this.domParser.parse(post.data.selftext_html);
        }
        return stuffToDisplay;
    }
}