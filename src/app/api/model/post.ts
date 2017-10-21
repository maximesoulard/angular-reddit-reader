import {  } from './subreddit';

export interface Post {
    data: Data,
    isDisplayable: boolean
}


interface Data {
    id: string,
    title: string,
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