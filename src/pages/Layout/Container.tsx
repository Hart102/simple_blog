import { childInterface } from "@/components/_child/Types"

const Container = ({ children }: childInterface) => {
    return (
        <section className="container mx-auto px-4 md:px-0">{children}</section>
    )
}

export default Container