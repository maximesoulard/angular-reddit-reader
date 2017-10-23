import { SafeHtml } from "@angular/platform-browser";

export interface Data {
    id: string,
    title: string,
    pinned: boolean,
    score: number,
    permalink: string,
    url: string,
    author: string,
    created_utc: number,
    selftext_html?: string,
    selftextSafeHtml?: SafeHtml,
    domain: string,
    preview?: Preview,
    thumbnail: string,
    subreddit_id: string,
    post_hint: string,
    subreddit_name_prefixed: string,
    subreddit: string,
    ups: number,
    type: string,
    secure_media_embed?: SecureMedia
}

interface Preview {
    images: Image[]
}

interface Image {
    source: ImageSource,
    variants: ImageVariants,
    id: string
}

interface ImageSource {
    url: string
}

interface ImageVariants {
    gif: Gif
}

interface Gif {
    source: ImageSource
}

interface SecureMedia {
    oembed: Embedded,
    content: string,
    contentSafeHtml: SafeHtml
}

interface Embedded {
    html: string
}