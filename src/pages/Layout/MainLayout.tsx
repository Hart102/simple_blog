import { childInterface } from "@/components/_child/Types"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Outlet } from "react-router-dom"

const MainLayout = ({ children }: childInterface) => {
  return (
    <>
      <Navbar />
      {children}
      <Outlet />
      <Footer />
    </>
  )
}

export default MainLayout