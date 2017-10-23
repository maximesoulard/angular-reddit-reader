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
    subreddit_name_prefixed: string,
    replies: Comment,
    depth: number
}

interface CommentChild {
    data: CommentData,
    kind: string
}