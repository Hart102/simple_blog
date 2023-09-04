import Img from "@/assets/images/author/author1.jpg"

// interface authorInterface {
//   image: string;
//   name: string;
//   position: string
// }

const Author = () => {
  return (
    <div className='flex gap-3'>
      <img src={Img} alt={Img} className='w-10 h-10 rounded-full' />
      <div>
        <p className='font-bold text-black'>Hart</p>
        <p className='text-gray-500'>CEO and founder</p>
      </div>
    </div>
  )
}

export default Author