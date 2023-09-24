import { childInterface } from "@/components/_child/Types"
// import Navbar from "@/components/Navbar"
// import Footer from "@/components/Footer/Footer"

const MainLayout = ({ children }: childInterface) => {
  return (
    <>
      {/* <Navbar /> */}
      {children}
      {/* <Footer /> */}
    </>
  )
}

export default MainLayout