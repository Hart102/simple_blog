import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';
import MainLayout from "./pages/Layout/MainLayout";
import Index from "@/pages/Index"
import ViewPost from "@/pages/ViewPost"

const App = () => {

  return (
    <BrowserRouter>
    <Routes>
      <Route element={<MainLayout />}>
        <Route index  element={<Index/>}/>
        <Route path="/posts" element={<ViewPost/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App


// https://newsapi.org/