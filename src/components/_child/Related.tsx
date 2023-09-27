import Author from '@/components/_child/Author'
import { PostType } from './Types';
import Title from './Title';
import { childInterface } from './Types';

export const SectionContainer = ({ children, title }: childInterface) => {
    return (
        <section className='flex flex-col gap-5 cursor-pointer'><Title title={title} /> {children}</section>
    )
}


const Related = ({ data }: PostType) => {
    return (
        <div className="flex pr-2 gap-10 rounded cursor-pointer hover:bg-gray-100">
            <article className='w-60 h-24 relative'>
                <img src={data.urlToImage} alt={data.urlToImage} className='w-full h-full absolute rounded lg:h-28' />
            </article>
            <div className='py-1'>
                <div className='flex'><p className='text-gray-500 hover:text-gray-800'> - {data.publishedAt}</p> </div>
                <p className="font-bold capitalize text-sm my-3 line-clamp-2">{data.title}</p>
                <Author />
            </div>
        </div>
    )
}

export default Related