import Trending from "@/components/Trending"
import Latest from "@/components/Latest"
import MostPopular from "@/components/MostPopular"
import RelatedPosts from "@/components/RelatedPosts"
import Footer from "@/components/Footer"


const Index = () => {
  return (
    <section className=" bg-yellow-50">
      <Trending />
      <Latest />
      <MostPopular />
      <RelatedPosts />
      <Footer />
    </section>
  )
}

export default Index