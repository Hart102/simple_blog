import { BrowserRouter, Routes, Route } from "react-router-dom";
// import MainLayout from "./pages/Layout/MainLayout";
import Index from "@/pages/Index"
import ViewPost from "@/pages/ViewPost"

const App = () => {

  return (
    <BrowserRouter>
    <Routes>
      {/* <Route element={<MainLayout />}> */}
        <Route path="/" element={<Index/>}/>
        <Route path="/post/:id" element={<ViewPost/>}/>
      {/* </Route> */}
    </Routes>
    </BrowserRouter>
  )
}

export default App