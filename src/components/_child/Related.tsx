import Author from '@/components/_child/Author'
import { PostType } from './Types';

const Related = ({ data }: PostType) => {
    return (
        <div className="
        flex
        p-2
        gap-10
        shadow
        rounded
        cursor-pointer
        hover:bg-gray-100
        ">
            <article>
                <img src={data.img} alt={data.img} className='w-60 h-32 rounded' />
            </article>
            <div>
                <div className='flex'>
                    <p className='text-orange-600'>{data.category}</p>
                    <p className='text-gray-500 hover:text-gray-800'> - {data.published}</p>
                </div>
                <p className="font-bold capitalize text-1xl my-3 line-clamp-2">{data.title}</p>
                <Author />
            </div>
        </div>
    )
}

export default Related