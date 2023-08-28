import Trending from "@/components/Trending"
import Latest from "@/components/Latest"
import MostPopular from "@/components/MostPopular"
import RelatedPosts from "@/components/RelatedPosts"


const Index = () => {
  return (
    <>
      <Trending />
      <div className="container px-4 md:px-0 mx-auto">
        <Latest />
        <MostPopular />
        <RelatedPosts />
      </div>
    </>
  )
}

export default Index