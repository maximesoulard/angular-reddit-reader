import {  } from './subreddit';
import { Data } from './childData';

export class Post {
    data: Data;
    isDisplayable: boolean;
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