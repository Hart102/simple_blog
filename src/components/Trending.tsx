import { useEffect, useState } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Trend from '@/components/_child/Trend';
import { Api } from '@/components/_child/Api';
import Loader from '@/components/_child/Loader';

const Trending = () => {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get(Api("top-headlines?sources=techcrunch"))
      setPosts(res.data.articles)
      setLoading(false);
    }

    fetchPosts()
  }, [])

  if (loading) return <div className='h-[60vh] flex items-center'><Loader /></div> 

  return (
    <div className='w-full pt- md:px-0 lg:h-[60vh] mt-8 mb-20' id='trending'>
      <div className="w-full h-full mx-auto">
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
          {posts && posts.map((post) => <SwiperSlide key={post.id}><Trend data={post} /></SwiperSlide>)}

        </Swiper>
      </div>
    </div>
  )
}

export default Trending