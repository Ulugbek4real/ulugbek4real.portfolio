import "./components/Navbar/Navbar"
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home"
import Menu from "./components/Menu/Menu";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Bounce from 'react-reveal/Bounce';
import { useEffect, useState } from "react";
import {Route, Routes } from 'react-router-dom'
import About from "./components/Resume/About";
import "./app.scss"
function App() {
  const [ menuOpen, setMenuOpen ] = useState(false);
  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  }
  const [ wsize, setWsize ] = useState(null)
 const  handleResize =() =>{
 setWsize(window.innerWidth)

  }
//   if (wsize<800){
// setMenuOpen(false)
//   }
  useEffect(()=>{
    if(wsize>800){
      setMenuOpen(false)
    }
  window.addEventListener("resize", handleResize)
  return () =>  window.removeEventListener("resize", handleResize)
  },[wsize])
  // document.body.style.overflow = "scroll";
  return (
    <div className="app">
  <Navbar menuOpen = {menuOpen}  handleMenu={handleMenu} />
  <Menu menuOpen = {menuOpen}  handleMenu={handleMenu} />

 <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/resume" element={<About />}/>
          <Route exact path="/projects" element={<Projects />}/>
          <Route exact path="/contact" element={<Contact />}/>  
</Routes>
 <Bounce bottom duration={1500}>
 <Footer />
 </Bounce>
      </div>

  );
}

export default App;
