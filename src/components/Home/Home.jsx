import "./home.scss"
import banner from "../../assets/banner.svg"
import React, { useEffect, useRef } from 'react';
import {BsDownload} from "react-icons/bs"
import Bounce from 'react-reveal/Bounce';
import { init } from 'ityped'
import { Link } from "react-router-dom";


export default function Home() {

  const textRef = useRef()
 useEffect(()=>{
init(textRef.current, {
  showCursor: false,
  strings: ["Full-stack Developer","Student"],
  typeSpeed:  50,
  backDelay:  1500,
  backSpeed:  80,

})
 },[])

  return (
    <div className='home'>

    <div className="home-center">
  
       <Bounce left>
       <div className="left-container">
      <h1 className="hithere">Hi there,</h1>
      <h1 className="name"> I'm Ulugbek.</h1>
   <div className="type-animation"  style={{ width: '20em', height:"2rem"}}>   <h1 ref={textRef}></h1></div>
  
      <div className="hero-text">
      <p>I am a Full-stack Developer looking forward
       to improving my knowledge through contributing and working with a team on some real world projects. That's it.</p>
      </div>
      
      <a target="_blank" href="https://resume.io/r/EQpy2MQnK" className="btn-download">View the Resume</a>
      </div>
       </Bounce>
      <Bounce right>
      <div className="right-container">

      <img src={banner} className="banner"></img>

      </div>
  

      </Bounce>

    </div>

    </div>

  )
}
