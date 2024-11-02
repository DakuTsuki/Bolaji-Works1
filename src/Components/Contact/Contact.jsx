import React from 'react'
import img1 from '../../assets/image/Screenshot__6_-removebg-preview.png'
import img2 from '../../assets/image/Screenshot__4_-removebg-preview.png'
import '../../index.css'
import './contact.css'
import '../bottom hero/style.css'
const Contact = () => {
  return (
    <div>
        <div class="contact-container">
    <h1>Contact Us</h1>
  </div>
  <div class="sub-contact-container">
    <div class="col-1">
      <img src={img1} alt=""/>
      <h1>BY PHONE</h1>

      <h2>Get telephone support by<br/>
        signing into your account.</h2>
      <a href="tel:+2349116837168">
        CALL US
      </a>
    </div>

    <div class="col-2">
      <h1>START A NEW PROJECT</h1>
      <h2>just send us your questions<br/>
        or concerns by starting a<br/>
        new project and we will give<br/>
        you the help you need.</h2><br/>

      <a class="bttn">START HERE</a>
    </div>
    <div class="col-3">
      <img src={img2} alt="" />
      <h1>LIVE CHAT</h1>
      <h2>Chat with a member of our<br />
        in-house team.</h2>

      <a class="btttn">START CHAT</a>
    </div>
  </div>

    </div>
  )
}

export default Contact