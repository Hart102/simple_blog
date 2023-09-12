import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Title from "@/components/_child/Title"
import NewsCard from "@/components/_child/NewsCard"

const MostPopular = () => {
  return (
    <div className='w-full py-10'>
      <Title title='Most Popular' />
      <Swiper
        spaceBetween={30}
        // slidesPerView={2}
        breakpoints={{
          640 : {
            slidesPerView: 2,
            spaceBetween: 30
          }
        }}
        
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >

        <SwiperSlide>
          <NewsCard gridCols='md:grid-cols-1' titleSize='text-sm lg:text-2xl' className='w-100 h-64' />
        </SwiperSlide>
        <SwiperSlide>
          <NewsCard gridCols='md:grid-cols-1' titleSize='text-sm lg:text-2xl' className='w-100 h-64' />
        </SwiperSlide>

        <SwiperSlide>
          <NewsCard gridCols='md:grid-cols-1' titleSize='text-sm lg:text-2xl' className='w-100 h-64' />
        </SwiperSlide>
        <SwiperSlide>
          <NewsCard gridCols='md:grid-cols-1' titleSize='text-sm lg:text-2xl' className='w-100 h-64' />
        </SwiperSlide>

      </Swiper>
    </div>
  )
}

export default MostPopular
