import React from 'react'
import Author from './_child/Author'
import Img from "@/assets/images/img2.jpg"

const RelatedPosts: React.FC = () => {
    return (
        <section className='grid lg:grid-cols-2 gap-10 text-sm py-20'>
            <div className='flex flex-col gap-5'>
                <p className='font-bold text-2xl mb-10'>Business</p>
                <div className="flex gap-10">
                    <article>
                        <img src={Img} alt={Img} className='w-60 h-32 rounded' />
                    </article>
                    <div>
                        <div className='flex'>
                            <p className='text-orange-600'>{"Business travel"}</p>
                            <p className='text-gray-500 hover:text-gray-800'>
                                - {"Jun 2, 2023"}
                            </p>
                        </div>
                        <p className={`font-bold capitalize text-1xl my-3`}>
                            {"Your most unhappy customers are your greatest source of learning"}
                        </p>
                        <Author />
                    </div>
                </div>
                <div className="flex gap-10">
                    <article>
                        <img src={Img} alt={Img} className='w-60 h-32 rounded' />
                    </article>
                    <div>
                        <div className='flex'>
                            <p className='text-orange-600'>{"Business travel"}</p>
                            <p className='text-gray-500 hover:text-gray-800'>
                                - {"Jun 2, 2023"}
                            </p>
                        </div>
                        <p className={`font-bold capitalize text-1xl my-3`}>
                            {"Your most unhappy customers are your greatest source of learning"}
                        </p>
                        <Author />
                    </div>
                </div>
                <div className="flex gap-10">
                    <article>
                        <img src={Img} alt={Img} className='w-60 h-32 rounded' />
                    </article>
                    <div>
                        <div className='flex'>
                            <p className='text-orange-600'>{"Business travel"}</p>
                            <p className='text-gray-500 hover:text-gray-800'>
                                - {"Jun 2, 2023"}
                            </p>
                        </div>
                        <p className={`font-bold capitalize text-1xl my-3`}>
                            {"Your most unhappy customers are your greatest source of learning"}
                        </p>
                        <Author />
                    </div>
                </div>
            </div>



            <div className='flex flex-col gap-5'>
                <p className='font-bold text-2xl mb-10'>Travel</p>
                <div className="flex gap-10">
                    <article>
                        <img src={Img} alt={Img} className='w-60 h-32 rounded' />
                    </article>
                    <div>
                        <div className='flex'>
                            <p className='text-orange-600'>{"Business travel"}</p>
                            <p className='text-gray-500 hover:text-gray-800'>
                                - {"Jun 2, 2023"}
                            </p>
                        </div>
                        <p className={`font-bold capitalize text-1xl my-3`}>
                            {"Your most unhappy customers are your greatest source of learning"}
                        </p>
                        <Author />
                    </div>
                </div>
                <div className="flex gap-10">
                    <article>
                        <img src={Img} alt={Img} className='w-60 h-32 rounded' />
                    </article>
                    <div>
                        <div className='flex'>
                            <p className='text-orange-600'>{"Business travel"}</p>
                            <p className='text-gray-500 hover:text-gray-800'>
                                - {"Jun 2, 2023"}
                            </p>
                        </div>
                        <p className={`font-bold capitalize text-1xl my-3`}>
                            {"Your most unhappy customers are your greatest source of learning"}
                        </p>
                        <Author />
                    </div>
                </div>
                <div className="flex gap-10">
                    <article>
                        <img src={Img} alt={Img} className='w-60 h-32 rounded' />
                    </article>
                    <div>
                        <div className='flex'>
                            <p className='text-orange-600'>{"Business travel"}</p>
                            <p className='text-gray-500 hover:text-gray-800'>
                                - {"Jun 2, 2023"}
                            </p>
                        </div>
                        <p className={`font-bold capitalize text-1xl my-3`}>
                            {"Your most unhappy customers are your greatest source of learning"}
                        </p>
                        <Author />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RelatedPosts