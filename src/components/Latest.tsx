import React from 'react'
import Title from "@/components/_child/Title"
import NewsCard from "@/components/_child/NewsCard"

import { Data } from '@/pages/Api/Data';
import Error from './_child/Error';


const Latest: React.FC = () => {

    if(!Data) return <Error />

    return (
        <section className='w-full py-10'>
            <Title title="Latest Posts" />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">

                {Data[1].map((post, index) => (
                    <NewsCard key={index} data={post} gridCols='md:grid-cols-1' titleSize='text-1xl' className='w-100 h-64'/>
                ))}
                
            </div>
        </section>
    )
}

export default Latest