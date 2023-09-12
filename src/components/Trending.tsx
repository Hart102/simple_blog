import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Title from '@/components/_child/Title'
import { Data } from '@/pages/Api/Data';
import Error from '@/components/_child/Error';
import Trend from '@/components/_child/Trend';

const Trending = () => {

  if (!Data) return <Error />

  return (
    <div className='
    w-full
    pt-24
    px-4
    md:px-0
    lg:h-screen
    '>
      <div className="
        container
        mx-auto
        ">
        <Title title='Trending' />

        <Swiper //Swiper configuration
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {/* Display trending news */}
          {Data[0].map((post, index) => <SwiperSlide key={index}><Trend data={post} /></SwiperSlide>)}

        </Swiper>
      </div>
    </div>
  )
}

export default Trending