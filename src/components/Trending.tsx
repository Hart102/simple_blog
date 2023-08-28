import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import NewsCard from '@/components/_child/NewsCard'
import Title from '@/components/_child/Title'

import { Data } from '@/pages/Api/Data';
import Error from './_child/Error';


const Trending = () => {

  if(!Data) return <Error />

  return (
    <div className='
    w-full
    h-screen
    pb-10
    pt-24
    px-4
    md:px-0
    '>
      <div className='
      lg:bg-[url("../src/assets/images/banner.png")]
      bg-contain
      bg-right-top
      bg-no-repeat
      '>
        <div className="
        container
        mx-auto
        ">
          <Title title='Trending' />
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            {Data[0].map((post, index) => (
              <SwiperSlide key={index}>
                <NewsCard data={post} gridCols='md:grid-cols-2' titleSize='text-2xl md:text-3xl' className='w-100 h-94' />
              </SwiperSlide>
            ))}

          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Trending