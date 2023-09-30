export interface childInterface {
    children?:
    | JSX.Element[]
    | JSX.Element
    | React.ReactElement
    | React.ReactElement[]
    | string;
    title?: string
}

export interface PostType {
    data: {
        id: string;
        author: string;
        content: string;
        description: string;
        publishedAt: string;
        source: { id: string, name: string }
        title: string;
        url?: string;
        urlToImage?: string;
    }
}

export interface newsCardIntrerface {
    columns: string;
    className: string;
    titleSize: string;
    data: {
        id: string;
        author: string;
        content: string;
        description: string;
        publishedAt: string;
        source: { id: string, name: string }
        title: string;
        url: string;
        urlToImage: string;
    }
}

export interface ViewPostInterface {
    data: {
        title: string;
        urlToImage?: string;
        description: string
    }
}

export interface PaginationInterface {
    postsPerPage: number;
    totalPosts: number;
    paginate: () => void;
}