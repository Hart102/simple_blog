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
    <div className='container mx-auto h-[60vh] relative lg:my-14'>
      {/* <img
        src={data.img}
        alt={""}
        className='w-full h-[100%]'
      /> */}

      {/* OverLay */}
      <div className="
      flex
      absolute
      top-0
      left-0
      w-full
      h-full
      p-1
      bg-rgba1
      text-white1
      cursor-pointer
      lg:p-5
      ">
        <div className="
        container
        mx-auto
        flex
        flex-col
        justify-center
        text-center
        ">
          <div className='flex mx-auto lg:mx-0'>
            <p className="text-orange-2001">{data.category}</p>
            <p> - {data.published}</p>
          </div>

          <p className='
          font-bold
          text-3xl
          lg:text-5xl
          capitalize
          line-clamp-3
          my-5
          text-white1
          '>{data.title}</p>

          <p className='
          my-4
          line-clamp-3
          text-center
          mx-auto
          font-light
          lg:max-w-[80%]
        '>{data.description}</p>
        </div>
      </div>
    </div>
  )
}

export default Trend