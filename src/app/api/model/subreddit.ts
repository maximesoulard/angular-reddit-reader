export interface Subreddit {
    data: Data;
}

interface Data {
    children: Child[];
}

interface Child {
    data: ChildData;
}

interface ChildData {
    id: string,
    title: string
}

interface PostChildData extends ChildData {
    pinned: boolean,
    score: number,
    permalink: string,
    url: string,
    author: string,
    created_utc: string,
    selftext_html?: string,
    domain: string,
    preview?: Preview,
    thumbnail: string,
    subreddit_id: string,
    post_hint: string,
    subreddit_name_prefixed: string
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