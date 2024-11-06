import React from 'react'
import '../../index.css'
import BannerImg from '../../assets/image/img-2-removebg-preview.png'

import img1 from '../.././assets/image/hero-banner.png'

const Hero = () => {
  return (
    <div>
      <div class="banner-container">
            <div class="banner-content">
          <h1>Hello, I'm
              Bolaji Aderigbe</h1>
           
           <h4>I am a seasoned Real Estate
               Developer + Realtor</h4>
        
            {/* <button class="btntwo">View My Portfolio </button> */}

            </div>
            <div class="banner">
          <img src={BannerImg} alt="" />
            </div>
    </div>

    <section class="hero" id="home">
        <div class="container">

          <div class="hero-content">

            <p class="hero-subtitle">
              <ion-icon name="home"></ion-icon>

              <span>Bolaji Aderigbe</span>
            </p>

            <h2 class="h1 hero-title">Find Your Dream House By Us</h2>

            <p class="hero-text">
            Your dream home awaits! Expert agents, personalized service, seamless transactions
            </p>

            <button class="btn">Make An Enquiry</button>

          </div>

          <figure class="hero-banner">
            <img src={img1} alt="Modern house model" class="w-100" />
          </figure>

        </div>
      </section>

    </div>
  )
}

export default Hero