import React from 'react'
import '../../index.css'
import BannerImg from '../../assets/image/img-2-removebg-preview.png'

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
    </div>
  )
}

export default Hero