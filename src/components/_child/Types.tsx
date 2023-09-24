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
        img?: string;
        category?: string;
        title?: string;
        description?: string;
        published?: string
    }
}

export interface ViewPostInterface {
    data: {
        title: string;
        img?: string;
        description: string
    }
}