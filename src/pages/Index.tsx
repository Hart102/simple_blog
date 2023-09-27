import Trending from "@/components/Trending"
import Latest from "@/components/Latest"
import MostPopular from "@/components/MostPopular"


const Index = () => {
  return (
    <section className="bg-yellow-50">
      <Trending />
      <Latest />
      <MostPopular />
    </section>
  )
}

export default Index