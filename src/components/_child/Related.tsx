import Author from '@/components/_child/Author'
import { PostType } from './Types';

const Related = ({ data }: PostType) => {
    return (
        <div className="
        flex
        pr-2
        gap-10
        rounded
        cursor-pointer
        hover:bg-gray-100
        ">
            <article>
                <img src={data.img} alt={data.img} className='w-60 h-24 rounded lg:h-28' />
            </article>
            <div className='py-1'>
                <div className='flex'>
                    <p className='text-orange-600'>{data.category}</p>
                    <p className='text-gray-500 hover:text-gray-800'> - {data.published}</p>
                </div>
                <p className="font-bold capitalize text-sm my-3 line-clamp-1">{data.title}</p>
                <Author />
            </div>
        </div>
    )
}

export default Related