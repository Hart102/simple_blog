import axios from 'axios';
import { useEffect, useState } from 'react';
import { Api } from '@/components/_child/Api';
import NewsCard from "@/components/_child/NewsCard";
import Title from "@/components/_child/Title";
import MainLayout from '@/pages/Layout/Container';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const MostPopular = () => {

  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(Api("top-headlines?country=us&category=business"))
      setPosts(res.data.articles)
    }

    fetchPosts()
  }, [])


  return (
    <div className='w-full py-10' id='popular'>
      <MainLayout>
        <Title title='Most Popular' />
        <Swiper
          spaceBetween={30}
          // slidesPerView={2}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 60
            }
          }}

          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >

          {posts && posts.map((post) => (
            <SwiperSlide key={post.id}>
              <NewsCard
                data={post}
                className='w-full h-64'
                columns='md:grid-cols-1'
                titleSize='text-sm lg:text-2xl'
              />
            </SwiperSlide>
          ))}

        </Swiper>
      </MainLayout>
    </div>
  )
}

export default MostPopular