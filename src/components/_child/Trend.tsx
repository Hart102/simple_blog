// Trending news display component
interface trendInterface {
  data: {
    img: string;
    category: string;
    title: string;
    description: string;
    published: string
  }
}

const Trend = ({ data }: trendInterface) => {
  return (
    <div className='w-full h-96 relative'>
      <img
        src={data.img}
        alt={data.img}
        className='w-full h-full'
      />

      <div className="
      absolute
      top-0
      left-0
      w-full
      h-full
      p-4
      lg:p-5
      bg-rgba
      text-white
      cursor-pointer
      ">
        <div className="lg:w-5/6">
          <div className='flex'>
            <p className='text-orange-6001'>{data.category}</p>
            <p> - {data.published}</p>
          </div>
          <p className='
          font-bold
          text-3xl
          lg:text-5xl
          capitalize
          line-clamp-4
          my-5
          text-yellow-100
        '>{data.title}</p>

          <p className='
          my-4
          font-light
          line-clamp-3
          lg:max-w-[80%]
        '>{data.description}</p>
        </div>
      </div>
    </div>
  )
}

export default Trend