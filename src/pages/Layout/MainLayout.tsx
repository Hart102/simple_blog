interface mainLayoutInterface {
    children:
    | JSX.Element[]
    | JSX.Element
    | React.ReactElement
    | React.ReactElement[]
    | string
}
const MainLayout = ({ children }: mainLayoutInterface) => {
    return (
        <section className="container mx-auto px-4 md:px-0">{children}</section>
    )
}

export default MainLayout