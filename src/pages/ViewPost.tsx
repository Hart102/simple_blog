import Container from "@/pages/Layout/Container"
import PostViewer from "@/components/_child/PostViewer"
import Related, { SectionContainer } from "@/components/_child/Related"
import { Data } from "./Api/Data"

const ViewPost = () => {

  return (
    <Container>
      <PostViewer data={""}/>
      <div className="lg:px-20 mx-auto">
        <SectionContainer title='Business'>
          {Data[2].map((post, index) => <Related key={index} data={post} />)}
        </SectionContainer>
      </div>
    </Container>
  )
}


export default ViewPost
