import { useState } from "react"
import { useLocation } from "react-router-dom"
import Container from "@/pages/Layout/Container"

const ViewPost = () => {
  const location = useLocation();
  const [post] = useState(location.state)

  return (
    <Container>
      <section className="py-28">
        <p className="font-bold text-3xl lg:text-5xl text-center">{post.title}</p>
        <div className="w-[90%] lg:w-[70%] mx-auto my-14">
          <img src={post.urlToImage} alt={post.urlToImage} className='w-full h-[100%]' />
        </div>
        <p className="my-4 text-justify mx-auto font-light border-b pb-10 lg:max-w-[70%]">{post.description}</p>
      </section>
    </Container>
  )
}


export default ViewPost
