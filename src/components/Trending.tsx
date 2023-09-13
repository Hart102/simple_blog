import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Error from '@/components/_child/Error';
import Trend from '@/components/_child/Trend';
import { Data } from '@/pages/Api/Data';

const Trending = () => {

  if (!Data) return <Error />

  return (
    <div className='
    w-full
    pt-
    md:px-0
    lg:h-[60vh]
    '>
      <div className="
      w-full
      h-full
      mx-auto
      ">
        <Swiper //Swiper configuration
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
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