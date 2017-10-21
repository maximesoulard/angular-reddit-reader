export default interface Comment {
    data: CommentData
}

interface CommentData {
    children: CommentChild[],
    body_html: string,
    body: string,
    stickied: boolean,
    parent_id: string,
    subreddit_name_prefixed: string
}

interface CommentChild {
    data: CommentData
}