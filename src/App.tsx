// import Navbar from "@/components/Navbar";
import Index from "@/pages/Index"
import ViewPost from "@/pages/ViewPost"
// import Footer from "@/components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index/>}/>
      <Route path="/post/:id" element={<ViewPost/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App