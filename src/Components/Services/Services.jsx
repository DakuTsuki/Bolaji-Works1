import React from 'react'
import '../../index.css'
import img1 from '../../assets/image/IMG_9492.jpg'
import img2 from '../../assets/image/IMG_9503.png'
import img3 from '../../assets/image/IMG_9481.jpg'


const Services = () => {
  return (
    <div>
      
     <div class="service-container">
      <h1>Services</h1>
     </div>
     <div class="service-content">
      <div class="service-image">
       <img src={img1} alt="" />
       <h2>Property
           Construction</h2>
      </div>

      <div class="service-image-two">
       <img src={img3} alt=""/>
       <h2>Property
           Management</h2>
      </div>

      <div class="service-image-three">
        <img src={img2} alt=""/>
        <h2>Property
            Consultation</h2>
      </div>
     </div>

    </div>
  )
}

export default Services