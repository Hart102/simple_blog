import { PostType } from "./Types";

const Trend = ({ data }: PostType) => {
  return (
    <div className='container mx-auto h-[60vh] relative text-yellow-50 lg:my-14'>
      <img src={data.urlToImage} className="w-full h-full" />
      <div className=" flex absolute top-0 left-0 w-full h-full p-1 cursor-pointer bg-rgba lg:p-5">
        <div className="container mx-auto flex flex-col justify-center text-center">
          <p className='font-bold text-3xl lg:text-5xl capitalize line-clamp-3 my-5'>{data.title}</p>
          <p className='my-4 line-clamp-3 text-center mx-auto font-light lg:max-w-[80%]'>{data.description}</p>
        </div>
      </div>
    </div>
  )
}

export default Trend