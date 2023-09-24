import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';
// import MainLayout from "./pages/Layout/MainLayout";
import Index from "@/pages/Index"
import ViewPost from "@/pages/ViewPost"

const App = () => {

  return (
    <BrowserRouter>
    <Routes>
        <Route index  element={<Index/>}/>
        <Route path="/post/:id" element={<ViewPost/>}/>
      {/* <Route element={<MainLayout />}>
      </Route> */}
    </Routes>
    </BrowserRouter>
  )
}

export default App