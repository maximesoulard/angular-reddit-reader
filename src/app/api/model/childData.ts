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
    domain: string,
    preview?: Preview,
    thumbnail: string,
    subreddit_id: string,
    post_hint: string,
    subreddit_name_prefixed: string,
    subreddit: string,
    ups: number,
    type: string
}

interface Preview {
    images: Image[]
}

interface Image {
    source: ImageSource,
    id: string
}

interface ImageSource {
    url: string
}