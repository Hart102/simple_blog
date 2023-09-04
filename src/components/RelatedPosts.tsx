import React from 'react'
import Img from "@/assets/images/img2.jpg"
import Related from '@/components/_child/Related'


const RelatedPosts: React.FC = () => {
    return (
        <section className='grid lg:grid-cols-2 gap-10 text-sm py-20'>
            {/* Business */}
            <div className='flex flex-col gap-5'>
                <p className='font-bold text-2xl mb-10'>Business</p>

                <Related
                    img={Img}
                    category={"Business travel"}
                    published={'Jun 2, 2023'}
                    title={'Your most unhappy customers are your greatest source of learning'}
                />
            </div>

            {/* Travel */}
            <div className='flex flex-col gap-5'>
                <p className='font-bold text-2xl mb-10'>Travel</p>
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