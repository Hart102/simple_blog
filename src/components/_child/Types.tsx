export interface childInterface {
    children?:
    | JSX.Element[]
    | JSX.Element
    | React.ReactElement
    | React.ReactElement[]
    | string
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