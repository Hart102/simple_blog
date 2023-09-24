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
    <div className='w-full h-[70vh] relative'>
      {/* <img
        src={""}
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
      p-4
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
          <div className='flex'>
            <p className="text-orange-2001">{data.category}</p>
            <p> - {data.published}</p>
          </div>

          <p className='
          font-bold
          text-3xl
          lg:text-6xl
          capitalize
          line-clamp-3
          my-5
          text-white1
          '>{data.title}</p>

          <p className='
          my-4
          line-clamp-3
          text-orange-501
          lg:max-w-[80%]1
          text-center
        '>{data.description}</p>
        </div>
      </div>
    </div>
  )
}

export default Trend