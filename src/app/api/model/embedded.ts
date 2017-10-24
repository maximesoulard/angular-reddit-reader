import { Post } from "./post";
import { Predicate } from "@angular/core";

export class EmbeddedFactory {
    static getInstance(post: Post): EmbeddedAbstract {
        // FIXME clean this

        if ((post.data.secure_media_embed && post.data.secure_media_embed.content) || post.data.selftext_html)
            return new HtmlContentEmbedded(post);
        else {
            switch (post.data.domain) {
                case 'i.imgur.com':
                    return new ImgurEmbedded(post);

                case 'imgur.com':
                    return new ImgurEmbedded(post);
                
                case 'gfycat.com':
                    return new GfycatEmbedded(post);

                case 'i.redd.it':
                    return new IRedditImgEmbedded(post);
            
                default:
                    break;
            }
        }
    }
}

export abstract class EmbeddedAbstract {
    constructor(public post: Post) {}
    abstract getRawHtml();
    abstract getDirectLink();

    protected getPreviewSourceUrl(): string {
        return this.post.data.preview && this.post.data.preview.images[0].variants.gif 
            ? this.post.data.preview.images[0].variants.gif.source.url 
            : null;
    }
}

class HtmlContentEmbedded extends EmbeddedAbstract {
    getRawHtml(): string {
        if (this.post.data.secure_media_embed != null && this.post.data.secure_media_embed.content != null)
            return this.post.data.secure_media_embed.content;
        else if (this.post.data.selftext_html != null)
            return this.post.data.selftext_html;
    }
    getDirectLink(): string {
        throw new Error("Method not implemented.");
    }
}

class ImgurEmbedded extends EmbeddedAbstract {
    getRawHtml(): string {
        throw new Error("No inner html.");
    }
    getDirectLink(): string {
        // TODO return post.data.url if it is a *.mp4 or *.gif or *.gifv or *.jpg or *.png
        // FIXME
        return this.getPreviewSourceUrl();
    }
}

class GfycatEmbedded extends EmbeddedAbstract {
    getRawHtml(): string {
        throw new Error("No inner html.");
    }
    getDirectLink(): string {
        // TODO return post.data.url if it is a *.mp4 or *.gif or *.gifv or *.jpg or *.png
        // FIXME
        return this.getPreviewSourceUrl();
    }
}

class IRedditImgEmbedded extends EmbeddedAbstract {
    getRawHtml(): string {
        throw new Error("Method not implemented.");
    }
    getDirectLink(): string {
        return this.post.data.url;
    }
}
