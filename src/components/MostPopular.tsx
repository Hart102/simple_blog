import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Title from "@/components/_child/Title"
import NewsCard from "@/components/_child/NewsCard"
import { Data } from '@/pages/Api/Data';
import MainLayout from '@/pages/Layout/MainLayout';

const MostPopular = () => {
  return (
    <div className='w-full py-10 bg-gray-100'>
      <MainLayout>
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
          {Data[1].map((post, index) => (
            <SwiperSlide key={index}>
              <NewsCard data={post} gridCols='md:grid-cols-1' titleSize='text-sm lg:text-2xl' className='w-full h-64' />
            </SwiperSlide>
          ))}

        </Swiper>
      </MainLayout>
    </div>
  )
}

export default MostPopular