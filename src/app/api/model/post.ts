import { Data } from './childData';

export class Post {
    data: Data;
    isDisplayable: boolean;
}

interface PostData extends Data {
    num_comments: number
}