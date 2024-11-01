import React from 'react'
import '../bottom hero/style.css'
import img1 from '../../assets/image/about-banner-1.png'
import img2 from '../../assets/image/about-banner-2.jpg'
import { GrValidate } from "react-icons/gr";
import { BiSolidDrink } from "react-icons/bi";
import { IoIosLeaf } from "react-icons/io";
import { CiHome } from "react-icons/ci";
import { Link } from 'react-router-dom'

const AboutUs = React.memo(() => {
  return (
    <div>

      
<section class="about" id="about">
        <div class="container">

          <figure class="about-banner">
            <img src={img1} alt="House interior"/>

            <img src={img2} alt="House interior" class="abs-img"/>
          </figure>

          <div class="about-content">

            <p class="section-subtitle">About Us</p>

            <h2 class="h2 section-title">The Leading Real Estate Rental Marketplace.</h2>

            <p class="about-text">
              Over 39,000 people work for us in more than 70 countries all over the This breadth of global coverage,
              combined with
              specialist services
            </p>

            <ul class="about-list">

              <li class="about-item">
                <div class="about-item-icon">
                <CiHome />
                </div>

                <p class="about-item-text">Smart Home Design</p>
              </li>

              <li class="about-item">
                <div class="about-item-icon">
                <IoIosLeaf />
                </div>

                <p class="about-item-text">Beautiful Scene Around</p>
              </li>

              <li class="about-item">
                <div class="about-item-icon">
                <BiSolidDrink />
                </div>

                <p class="about-item-text">Exceptional Lifestyle</p>
              </li>

              <li class="about-item">
                <div class="about-item-icon">
                <GrValidate />
                </div>

                <p class="about-item-text">Complete 24/7 Security</p>
              </li>

            </ul>

            <p class="callout">
              "Enimad minim veniam quis nostrud exercitation
              llamco laboris. Lorem ipsum dolor sit amet"
            </p>

            {/* <Link to="./aboutus" >Read more</Link> */}
            <Link to="/aboutus" class="btn">Read More</Link>

          </div>

        </div>
      </section>
    </div>
  )
}
)

export default AboutUs