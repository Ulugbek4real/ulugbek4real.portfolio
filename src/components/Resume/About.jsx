import { FaGithub, FaLinkedin, FaInstagramSquare} from "react-icons/fa";
import {MdDateRange} from "react-icons/md"
import {MdOutlineLocationOn} from "react-icons/md"
import {MdOutlineEmail} from "react-icons/md"
import {MdPhoneIphone} from "react-icons/md"
import node from "../../assets/nodejs-logo-vector_crop.svg";
import react from "../../assets/react_crop-removebg-preview-removebg-preview.png";
import reactrouter from "../../assets/react-router.png";
import redux from "../../assets/redux_crop.png";
import express from "../../assets/express_crop-removebg-preview.png";
import mongoose from "../../assets/mongoose_crop.png";
import MyProf from "../../assets/myProf.jpg"
import Bounce from 'react-reveal/Bounce';
import {Link} from "react-router-dom";
import  "./about.scss";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='about-container'>
        <div className="about-center">
        <Bounce left>
            <div className="info-card">
        
                <div className="info-card-top">
                <div className="info-card-top-float">
                  <div className="img-container"><img src={MyProf} alt="Myprof"></img></div>
                    <h2>Nurmatov <span className="name">Ulugbek</span></h2>
                    <span className="occupation">Web Developer</span>
                    <div className="icons">
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
         </div>
                </div>
                </div>
                <div className="info-card-bottom">
                    <div className="info-card-details">
                        <div className="mini-contacts "> <MdDateRange /><p>January 20, 2000</p></div>
                        <div className="mini-contacts "> <MdOutlineLocationOn /><p>South Korea (Current)</p></div>
                        <div className="mini-contacts "> <MdOutlineEmail /><p>ulugbek4real.w@gmail.com</p></div>
                        <div className="mini-contacts " > <MdPhoneIphone /><p>+82 10 9828 1777</p></div>
                     <Link to="/contact" className="info-card-button">Contact</Link>
                    </div>
           </div>
         
           </div>
           </Bounce>
           <Bounce right>
            <div className="big-card">
                <div className="big-card-about">
                <h1>About me</h1>
                <p> I'm Full-stack Developer and Designer. I enjoy turning complex problems into simple, beautiful and intuitive designs. I'd like to highlight that I'm extremely teachable and enjoy working with either a team or alone. Outside coding 5-6 hours a day, I train Jiu-Jitsu and spend quality time with friends and family. </p>
                </div>
                <div className="big-card-skills">
                <h1>Resume <span className="thin">(brief)</span></h1>
                    <div className="skill-single">
                    <div className="skill-single-container">
             <div className="headline2"><h2 >Education</h2></div>
                 <div>
                 <div className="univ-link"><a href="https://international.jnu.ac.kr/IndexMain.aspx"><h3>Chonnam National University</h3></a></div>
                   <div className="sub-info">
                   <span>2018 - Current</span> 
                   <span>|</span>
                   <h4>Business Adminstration</h4>
                   </div>
                 </div>
             <div className="headline2">    <h3 >Online Courses</h3></div>
                 <div>
                 <div className="univ-link"><a href="https://www.udemy.com/course/the-complete-web-development-bootcamp/"><h4>The Complete 2021 Web Development Bootcamp</h4></a></div>
                   <div className="sub-info">
                   <span>Udemy</span> 
                   <span>|</span>
                   <span>Angela Yu</span>
                   </div>
                 </div>
                 <div>
                 <div className="univ-link"><a href="https://www.edx.org/course/cs50s-web-programming-with-python-and-javascript"><h4>CS50's Web Programming with Python and JavaScript</h4></a></div>
                   <div className="sub-info">
                   <span>Edx</span> 
                   <span>|</span>
                   <span>Harvard</span>
                   </div>
                 </div>
                 <div>
                 <div className="univ-link"><a href="https://www.udemy.com/course/the-complete-javascript-course/?src=sac&kw=complete+javas"><h4>The Complete JavaScript Course 2022</h4></a></div>
                   <div className="sub-info">
                   <span>Udemy</span> 
                   <span>|</span>
                   <span>Jonas Schmedtmann</span>
                   </div>
                 </div>
                 <div>
                 <div className="univ-link"><a href="https://www.udemy.com/course/react-tutorial-and-projects-course/"><h4>React Tutorial and Projects Course (2022)</h4></a></div>
                   <div className="sub-info">
                   <span>Udemy</span> 
                   <span>|</span>
                   <span>John Smilga</span>
                   </div>
                 </div>


                    </div>
                    </div>
                    <div className="skill-single">
                    <div className="skill-single-container">
                    <div className="headline2">  <h2 >JavaScript</h2></div>
                      <p>I love Javascript ! During the past 1.5 years, It has been my primary language, working with it for around 5-6 hours a day . Some related frameworks and libaries I have learned include the following:</p>
                      <div className="js-libraries">
                        <div className="library1 librabr">
                        <img src={node} alt="node"></img>
                        <span className="level">Intermediate</span>
                        </div>
                        <div className="library2 librabr">
                        <img src={react} alt="react"></img>
                        <span className="level">Fluent</span>
                        </div>
                        <div className="library3 librabr">
                        <img src={express} alt="express"></img>
                        <span className="level">Fluent</span>
                        </div>
                        <div className="library4 librabr">
                        <img src={reactrouter} alt="reactrouter"></img>
                        <span className="level">Fluent</span>
                        </div>
                        <div className="library5 librabr">
                        <img src={mongoose} alt="mongoose"></img>
                        <span className="level">Fluent</span>
                        </div>
                        <div className="library6 librabr">
                        <img src={redux} alt="redux"></img>
                        <span className="level">Beginner</span>
                        </div>
                      </div>
                      <div className="others">
                        <h3>Others:</h3>
                        <ul className="other-items" >
                          <li className="single-item">DOM</li>
                          <li className="single-item">Security</li>
                          <li className="single-item">JQuery</li>
                          <li className="single-item">REST APIs</li>
                          <li className="single-item">Authentication</li>
                        </ul>
                      </div>
                    </div>
                    </div>
                    <div className="skill-single">
                    <div className="skill-single-container">
                     <div className="headline"> <h2 >Work Experience</h2></div>
                      <div>
                 <div className="univ-link"><h2>Maths Teacher Assistant and Mentor</h2></div>
                   <div className="sub-info">
                   <span>2014 - 2016</span> 
                   <span>|</span>
                   <h4>Maths</h4>
                   </div>
                   <ul className="work-item">
                   <li className="work-item-li">Helped junior students prepare for Math Olympiads, teaching them core algorithms to solve Olympiad problems.</li>
                    <li className="work-item-li">Conducted afterschool programs for students.</li>
                    <li className="work-item-li">Prepared students for university entrance exams.</li>
                   </ul>
                 </div>
                
                
                 <div>
                 <div className="univ-link"><h2>Instructor</h2></div>
                   <div className="sub-info">
                   <span>2016 - 2018</span> 
                   <span>|</span>
                   <h4>English</h4>
                   </div>
                   <ul className="work-item">
                    <li className="work-item-li">I helped more than 40 students prepare for Academic IELTS and General English</li>
                   </ul>
                 </div>
                    </div>
                    </div>
                    <div className="skill-single">
                    <div className="skill-single-container">
                     <div  className="headline2"> <h2>Languages</h2></div>
                      <div className="languages">
                        <h3>English</h3>
                        <ul><li>Proficient</li></ul>
                      </div>
                      <div className="languages">
                        <h3>Uzbek</h3>
                        <ul><li>Native</li></ul>
                      </div>
                      <div className="languages">
                        <h3>Korean</h3>
                        <ul><li>Intermediate(TOPIK 5)</li></ul>
                        <p>I can easily understand and speak Korean in day-to-day life although it is much difficult for me to understand academic talks. I have participated in intensive Korean camp for a year at Chonnam National University.</p>
                      </div>
                    </div>
                    </div>
                </div>
                <div></div>
            </div>
            </Bounce>
        </div>
    </div>
  )
}

export default About