import { Data } from "./childData";

export interface Comment {
    data: CommentData
}

interface CommentData extends Data {
    children: CommentChild[],
    body_html: string,
    body: string,
    stickied: boolean,
    parent_id: string,
    created: string,
    subreddit_name_prefixed: string
}

interface CommentChild {
    data: CommentData
}