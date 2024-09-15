import "./App.css";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Blog from './components/Blog';
import About from './components/About';
import Project from './components/Project';
import Projectlist from './components/Projectlist';
import Photo from './components/Photo';
import Navbar from "./components/Navbar";




function App() {
    return(
      <BrowserRouter>
      <Routes>

        <Route path='/' element={<Blog/>} />
        <Route path='Blog' element={<Blog/>} />
        <Route path='/About' element={<About/>} />


        <Route path='/Photo' element={<Photo/>} />
        <Route path='/Project' element={<Project/>} />
        <Route path='/Projectlist' element={<Projectlist/>} />
        <Route path='/Navbar' element={<Navbar/>} />        


      </Routes>
      </BrowserRouter>
    )
}

export default App
