import { ViewPostInterface } from "./Types"

const PostViewer = ({ data }:ViewPostInterface) => {
    return (
        <>
            <p className="font-bold text-3xl lg:text-5xl text-center">{data.title}</p>
            <div className="w-[90%] lg:w-[70%] mx-auto my-10">
                <img src={data.img} alt={data.img} className='w-full h-[100%]' />
            </div>
            <p className="my-4 text-center mx-auto font-light lg:max-w-[80%]">{data.description}</p>
        </>
    )
}

export default PostViewer