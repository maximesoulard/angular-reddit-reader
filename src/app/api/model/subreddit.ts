export interface Subreddit {
    data: Data;
}

interface Data {
    children: Child[];
}

export interface Child {
    data: ChildData;
}

export interface ChildData {
    id: string,
    title: string,
    display_name: string
}
