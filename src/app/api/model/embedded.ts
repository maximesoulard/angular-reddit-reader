import { Post } from "./post";

export class EmbeddedFactory {
    static getInstance(post: Post): Embedded {
        if ((post.data.secure_media_embed && post.data.secure_media_embed.content) || post.data.selftext_html)
            return new SecureMediaEmbedded(post);
        else if (post.data.domain === 'i.imgur.com')
            return new ImgurEmbedded(post);
        else if (post.data.domain === 'gfycat.com')
            return new GfycatEmbedded(post);
    }
}

export abstract class Embedded {
    constructor(protected post: Post) {}
    abstract getRawHtml();
    abstract getDirectLink();
}

class ImgurEmbedded extends Embedded {
    getRawHtml(): string {
        throw new Error("No inner html.");
    }
    getDirectLink(): string {
        // TODO return post.data.url if it is a *.mp4 or *.gif or *.gifv
        return this.post.data.preview.images[0].variants.gif.source.url;
    }
}

class GfycatEmbedded extends Embedded {
    getRawHtml(): string {
        throw new Error("No inner html.");
    }
    getDirectLink(): string {
        // TODO return post.data.url if it is a *.mp4 or *.gif or *.gifv
        return this.post.data.preview.images[0].variants.gif.source.url;
    }
}

class SecureMediaEmbedded extends Embedded {
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