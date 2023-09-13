// Trending news display component
interface trendInterface {
  data: {
    img: string;
    category: string;
    title?: string;
    description: string;
    published: string
  }
}

const Trend = ({ data }: trendInterface) => {
  return (
    <div className='w-full h-[60vh] relative'>
      <img
        src={data.img}
        alt={data.img}
        className='w-full h-[100%]'
      />

      <div className="
      flex
      absolute
      top-0
      left-0
      w-full
      h-full
      p-4
      bg-rgba
      text-white
      cursor-pointer
      lg:p-5
      ">
        <div className="
        container
        mx-auto
        flex
        flex-col
        justify-center
        ">
          <div className='flex'>
            <p className="text-orange-200">{data.category}</p>
            <p> - {data.published}</p>
          </div>

          <p className='
          font-bold
          text-3xl
          lg:text-6xl
          capitalize
          line-clamp-3
          my-5
          text-white
          '>{data.title}</p>

          <p className='
          my-4
          line-clamp-3
          text-orange-50
          lg:max-w-[80%]
        '>{data.description}</p>
        </div>
      </div>
    </div>
  )
}

export default Trend