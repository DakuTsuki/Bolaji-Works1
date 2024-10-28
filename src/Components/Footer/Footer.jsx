import React from 'react'
import "../../index.css"
import img1 from '../../assets/image/logo.png'
import img2 from '../../assets/image/download-android-14e3ba83d858920d3a0c..svg'
import img3 from '../../assets/image/download-ios-88a10d67c1fa53284444..svg'

const Footer = () => {
  return (
    <>
           <footer>
              <div class="">
     <div className="ready">
     <div class="logo2">
                    <img src={img1} alt="" />
                      
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />
                  </div>
                <div class="box-container1">
                  
                
                       <div class="box1">
                        <li><a href="#">Advertise/Market Your Property</a></li>
                        <li><a href="#">Featured Real Estate Companies</a></li>
                        <li><a href="#">Place Banner Adverts</a></li>
                        <li><a href="#">Investor Relation</a></li>
                        <li><a href="#">Afiliate Programs</a></li>
                        <li><a href="#">Customer interaction/relationship</a></li>
                       </div>

                  <div class="box1">
                    <h1>Links</h1>
                      <li><a href="HOME">Home</a></li>
                      <li><a href="About.html">About</a></li>
                      <li><a href="project.html">Project</a></li>
                      <li><a href="#">Charity</a></li>
                      <li><a href="contact.html">Contact</a></li>
                  </div>

                  <div class="box1">
                    <h1>Companies</h1>
                    <li><a href="#">Estate Agents</a></li>
                    <li><a href="#">Property Developer</a></li>
                    <li><a href="#">Property Demand Trends</a></li>
                    <li><a href="#">Average Property Prices</a></li>
                    <li><a href="#">Mortage buildings</a></li>
                  </div>

                  <div class="box1">
                    <h1>About Us</h1>
                  <li><a href="#">Find Agents</a></li>
                  <li><a href="#">Search Property</a></li>
                  <li><a href="#">News</a></li>
                  <li><a href="#">Property Blog</a></li>
                  <li><a href="#">Terms of Use</a></li>
                  <li><a href="#">FAQ's</a></li>
                  <li><a href="#">Core Values</a></li>
               
                  </div>
                </div>
              </div>
     </div>
                
              <div class="copyright-container">
                <p>©2024 Bolaji Property Centre, All rights reserved.</p>
              </div>
              
            </footer>
    </>
  )
}

export default Footer