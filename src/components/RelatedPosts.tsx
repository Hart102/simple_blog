import React from 'react'
import Related from '@/components/_child/Related'
import Title from '@/components/_child/Title'
import MainLayout from '@/pages/Layout/Container'
import { Data } from '@/pages/Api/Data'


const RelatedPosts: React.FC = () => {
    return (
        <MainLayout>
            <section className='grid lg:grid-cols-2 gap-10 text-sm py-20'>
                {/* Business */}
                <div className='
                flex
                flex-col
                gap-5
                cursor-pointer
                '>
                    <Title title='Business'/>
                    {Data[2].map((post, index) => (
                        <Related key={index} data={post}/>
                    ))}
                </div>

                {/* Travel */}
                <div className="
                flex
                flex-col
                gap-5
                cursor-pointer
                ">
                    <Title title='Travel'/>
                    {Data[1].map((post, index) => (
                        <Related key={index} data={post}/>
                    ))}
                </div>
            </section>
        </MainLayout>
    )
}

export default RelatedPosts

