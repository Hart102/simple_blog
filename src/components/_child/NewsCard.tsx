import React from 'react'
import { useNavigate } from 'react-router-dom';
import Author from './Author'
import { newsCardIntrerface } from '@/components/_child/Types';


const NewsCard: React.FC<newsCardIntrerface> = ({
    columns,
    className,
    titleSize,
    data
}) => {

    const navigate = useNavigate();
    const redirect = () => navigate('/posts', { state: data })

    return (
        <section onClick={redirect} className={`grid gap-5 cursor-pointer ${columns}`}>
            <img
                src={data ? data.urlToImage : ""} alt={data ? data.urlToImage : ""}
                className={`${className} h-40 rounded scale-100 hover:scale-105 transition delay-300 duration-500`} 
            />
            <div className="text-sm flex flex-col justify-center">
                <div className='flex'><p className='text-gray-500'>- {data ? data.publishedAt : ""}</p></div>
                <p className={`font-bold capitalize hover:text-red-600 ${titleSize}`}>{data ? data.title : ""}</p>
                <p className='font-light my-4 line-clamp-2'>{data ? data.description : ""}</p>
                <Author />
            </div>
        </section>
    )
}

export default NewsCard