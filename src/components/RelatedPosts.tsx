import React from 'react'
import Img from "@/assets/images/img2.jpg"
import Related from '@/components/_child/Related'
import Title from '@/components/_child/Title'


const RelatedPosts: React.FC = () => {
    return (
        <section className='grid lg:grid-cols-2 gap-10 text-sm py-20'>
            {/* Business */}
            <div className='flex flex-col gap-5'>
                <Title title='Business'/>

                <Related
                    img={Img}
                    category={"Business travel"}
                    published={'Jun 2, 2023'}
                    title={'Your most unhappy customers are your greatest source of learning'}
                />
            </div>

            {/* Travel */}
            <div className='flex flex-col gap-5'>
                <Title title='Travel'/>
                <Related
                    img={Img}
                    category={"Business travel"}
                    published={'Jun 2, 2023'}
                    title={'Your most unhappy customers are your greatest source of learning'}
                />
            </div>
        </section>
    )
}

export default RelatedPosts