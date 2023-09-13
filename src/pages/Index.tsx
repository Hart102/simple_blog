import Trending from "@/components/Trending"
import Latest from "@/components/Latest"
import MostPopular from "@/components/MostPopular"
import RelatedPosts from "@/components/RelatedPosts"


const Index = () => {
  return (
    <>
      <Trending />
      <Latest />
      <MostPopular />
      <RelatedPosts />
    </>
  )
}

export default Index