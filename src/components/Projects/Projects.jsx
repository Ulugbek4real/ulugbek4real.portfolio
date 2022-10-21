import "./projects.scss"
import  weblog1 from "../../assets/weblog1.jpeg"
import  weblog2 from "../../assets/weblog2.jpeg"
import  portfolio from "../../assets/portfolio.jpeg"
import  wordle from "../../assets/wordle.jpeg"
import { useRef, useState, useEffect } from "react"
import { FaGithub} from "react-icons/fa";
import { Bounce } from "react-reveal"
export default function Projects() {
const [ img, setImg ] = useState(1)
const [ secondImg, setSecondImg ] = useState(2)

const img1 = useRef();
const img2 = useRef();
const handleClick = () => {
  setSecondImg(secondImg===1 ? 2 : 1)
  img1.current.style = "z-index:0"
setTimeout(()=>{
  setImg(img===1 ? 2 : 1)
  img1.current.style = "z-index:1"

},300)

}
useEffect(() => {
  window.scrollTo(0, 0)
}, [])
  return (
    <div className='projects'>
    <div className="projects-wrapper">
    <Bounce top>
    <h1 className="projects-title">Recent Projects</h1>
    </Bounce>
   <Bounce bottom>
   <div className="projects-singles">
        <div className="project-header">
          <h2 className="project-name">Weblog</h2>
       <span className="featured-project">Featured Project</span>
        </div>
        <div className="project-main">
        <div className="project-img test" >
          <img ref={img1} className="img1 double" src={img ==1 ? weblog1 : weblog2}></img>
          <img ref={img2} className="img2 double" src={secondImg ==1 ? weblog1 : weblog2} onClick={handleClick}></img>
        </div>
      <div className="project-details">
      <div className="mini-header">
      <span className="featured-project">Featured project</span>
      <h1>Weblog</h1>
      </div>
      <div className="project-desc">
        <ul>
          <li>Weblog is a fully functional blogging website inspired by Medium. Users can register, login, and post. Blogs can be sorted according to their categories or authors.
          </li>
          <li>
          I added Web Scraping to find and show the most trending blogs from several popular websites and It is easy to search blogs depending on host website names.
          </li>
        </ul>
      
        </div>
        <div className="project-footer">
          <span>React Js</span>
          <span>Node Js</span>
          <span>Express Js</span>
          <span>MongoDb</span>
          <span>bcrypt</span>
          <span>Sass</span>
          <span>mongoose</span>
          <span>axios</span>

        </div>
      
        <div className="project-links">
        <a href="https://weblogproject.herokuapp.com" target="_blank" className="project-link">View the site</a>
         <a href="https://github.com/Ulugbek4real/weblog" className="github" target="_blank"><FaGithub /></a>
        </div>
      </div>
        
        </div>
      </div>
   </Bounce>
    <Bounce bottom>
    <div className="projects-singles">
        <div className="project-header">
          <h2 className="project-name">Portfolio</h2>
          <span className="featured-project">Featured Project</span>
        </div>
        <div className="project-main">
        <div className="project-img">
          <img  className="single-img" src={portfolio}></img>
        </div>
        <div className="project-details">
        <div className="mini-header">
      <span className="featured-project">Featured project</span>
      <h1>Portfolio</h1>
      </div>
        <div className="project-desc">
        <ul>
          <li>This is my portfolio website that is including my noteworthy projects and resume. I used React js for the most part and Sass to style.
          </li>
          <li>This is my portfolio website that is including my noteworthy projects and resume. I used React js for the most part and Sass to style.
          </li>
        </ul>
        </div>
        <div className="project-footer">
          <span>React Js</span>
          <span>Ityped</span>
          <span>Sass</span>

        </div>
        <div className="project-links">
        <a  href="https://ulugbek4real.herokuapp.com/" target="_blank" className="project-link">View the site</a>
         <a href="https://github.com/Ulugbek4real/portfolio" className="github" target="_blank"><FaGithub /></a>
        </div>
        </div>
      
        </div>
      </div>
    </Bounce>
    <Bounce bottom>
    <div className="projects-singles">
        <div className="project-header">
          <h2 className="project-name">Wordle-react</h2>
          <span className="featured-project">Featured Project</span>
        </div>
        <div className="project-main">
        <div className="project-img">
          <img  className="single-img" src={wordle}></img>
        </div>
        <div className="project-details">
        <div className="mini-header">
      <span className="featured-project">Featured project</span>
      <h1>Wordle-react</h1>
      </div>
        <div className="project-desc wordle">
        <ul>
          <li>I recreated famous game Wordle after playing it too times. I used React js for the most part and Sass to style.
          </li>
          <li>It is fully functional and lets you play anytime you want. I used an array of all 5 word letters in English alphabet.
          </li>
        </ul>
        </div>
        <div className="project-footer">
          <span>React Js</span>
          {/* <span>Ityped</span> */}
          <span>Sass</span>

        </div>
        <div className="project-links">
        <a href="#" target="_blank" className="project-link">View the site</a>
         <a href="https://github.com/Ulugbek4real/wordle-react" className="github" target="_blank"><FaGithub /></a>
        </div>
        </div>
      
        </div>
      </div>
    </Bounce>
    </div>
    </div>
  )
}
