import "./menu.scss"
import { FaGithub, FaLinkedin, FaInstagramSquare, FaTelegram } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Menu({menuOpen,handleMenu}) {
  return (
    <div className={'menu ' + (menuOpen && "active")}>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/resume">Resume</Link>
            </li>
            <li>
                <Link to="/projects">Projects</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
        <div className="menuIcons">
        <a
							href="https://www.linkedin.com/in/ulugbek-nurmatov-578ba7237/"
							target="_blank"
							rel="noreferrer"
						>
							<FaLinkedin className="icon linkedin" />
						</a>
						<a href="https://github.com/Ulugbek4real" target="_blank" rel="noreferrer">
							<FaGithub className="icon github" />
						</a>
						<a href="https://www.instagram.com/ulugbek4real/" target="_blank" rel="noreferrer">
							<FaInstagramSquare className="icon  instagramm" />
						</a>
						<a href="https://t.me/ulugbek4real" target="_blank" rel="noreferrer">
							<FaTelegram className="icon telegram" />
						</a>
         </div>
    </div>
  )
}
