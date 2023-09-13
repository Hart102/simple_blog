import React from 'react'
// import Image from "@/assets/images/articles/posts/img1.jpg"
import Author from './Author'

interface newsCardIntrerface {
    gridCols: string;
    className: string;
    titleSize: string;
    data: {
        img: string;
        category: string;
        title: string;
        description: string;
        published: string
    }
}


const NewsCard: React.FC<newsCardIntrerface> = ({ gridCols, className, titleSize, data }) => {

    return (
        <div className={`
        grid
        gap-10
        cursor-pointer
        ${gridCols}
        `}>
            <img
                src={data ? data.img : ""}
                alt={data ? data.img : ""}
                className={`${className}
                rounded
                scale-100
                hover:scale-105
                transition
                delay-300
                duration-500
            `} />

            <div className='
            text-sm
            flex
            flex-col
            justify-center
            '>
                <div className='flex'>
                    <p className='text-orange-600'>{data ? data.category : ""}</p>
                    <p className='text-gray-500'>
                        - {data ? data.published : ""}
                    </p>
                </div>
                <p className={`font-bold capitalize hover:text-orange-600 ${titleSize}`}>
                    {data ? data.title : ""}
                </p>
                <p className='text-gray-500 my-4 line-clamp-2'>
                    {data ? data.description : ""}
                </p>

                <Author />
            </div>
        </div>
    )
}

export default NewsCard