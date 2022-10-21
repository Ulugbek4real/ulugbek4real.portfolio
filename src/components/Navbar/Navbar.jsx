import "./navbar.scss"
import { FaGithub, FaLinkedin, FaInstagramSquare, FaTelegram } from "react-icons/fa";
import {Link} from "react-router-dom";

export default function Navbar({menuOpen,handleMenu}) {

  window.onscroll = () =>{
    const nav = document.querySelector(".navbar")
   if(window.scrollY>0){
    nav.classList.add("scrolled")
   }else{
    nav.classList.remove("scrolled")
   }
  }
  return (
    <nav className={"navbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <Link to="/" className="logo">Ulugbek<span>4real</span></Link>
        
        <ul className="links">
            <li> <Link to="/">Home</Link></li>
            <li> <Link to="/resume">About</Link></li>
            <li> <Link to="/projects">Projects</Link></li>
            <li> <Link to="/contact">Contact</Link></li>
        </ul>
        <div className="social-icons">
         <div className="icons">
         <a href="https://www.linkedin.com/in/ulugbek-nurmatov-578ba7237/" target="_blank"><FaLinkedin className="icon linkedin" /></a>
				 <a href="https://github.com/Ulugbek4real" target="_blank"><FaGithub className="icon github" /></a>
				 <a href="https://www.instagram.com/ulugbek4real/" target="_blank" ><FaInstagramSquare className="icon  instagramm" />	</a>
				 <a href="https://t.me/ulugbek4real" target="_blank" ><FaTelegram className="icon telegram" /></a>
         </div>
      
            <div className="burger" onClick={()=>handleMenu()}>
          <span className="line1"></span>
          <span className="line2"></span>
          <span className="line3"></span>
        </div>
					</div>
        
      </div>
    </nav>
  )
}

