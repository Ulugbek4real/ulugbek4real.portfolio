import "./contact.scss"
import { useState, useRef } from "react";
import {RiSendPlaneLine} from "react-icons/ri"
import {FiArrowUpRight} from "react-icons/fi"
import {BsChat} from "react-icons/bs"
import {AiOutlineArrowRight} from "react-icons/ai"
import { Bounce } from "react-reveal";

import { FaGithub, FaLinkedin, FaInstagramSquare, FaTelegram } from "react-icons/fa";
import emailjs from '@emailjs/browser';
export default function Contact() {
  const [ message, setMessage ] = useState(false);
  const form = useRef();
  const sendEmail = (e) => {
    setMessage(true);
    e.preventDefault();

    emailjs.sendForm(
      'service_2u5udh2',
     'template_cra0afs',
      form.current,
     '6oB41hvHrB4JvpvUK')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  
  return (
<div className="contact" id="contact">
<Bounce top>
<div className="contact-me">
<h1>Contact Me</h1>
<p>Get in touch</p>
</div>
</Bounce>
<Bounce left>
<div className="left-container">
<h2><BsChat  className="send-icon"/>Talk to me</h2>
<div className="left-container-center">

<div className="contact-left">
<p className="app">Email</p>
<p className="app-user">ulugbek4real.w@gmail.com</p>
</div>
<div className="contact-left">
<p className="app">Telegram</p>
<p className="app-user">@ulugbek4real</p>
<a className="app-link" href="https://t.me/ulugbek4real" target="_blank" >Send me a DM <AiOutlineArrowRight className="arrow-icon" /> </a>
</div>
<div className="contact-left">
<p className="app">Instagram</p>
<p className="app-user">@ulugbek4real</p>
<a className="app-link"  href="https://www.instagram.com/ulugbek4real/" target="_blank" >Send me a DM <AiOutlineArrowRight  className="arrow-icon"/> </a>
</div>
</div>

</div>
</Bounce>
<Bounce right>
<div className="right-container">
<h2><RiSendPlaneLine  className="send-icon"/>Write me your message</h2>
<form  ref={form} onSubmit={sendEmail} >
<input type="text" placeholder="Name" name="user_name" required></input>
  <input type="email" placeholder="Email" name="user_email" required></input>
  <textarea placeholder="Message" name="message" required></textarea>
  <button type="submit">Submit <FiArrowUpRight className="arrow-icon" /></button>
{message && <span>Thanks, I'll reply ASAP :)</span>}
</form>
</div>
</Bounce>

</div>
  )
}
