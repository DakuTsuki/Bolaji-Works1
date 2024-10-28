import React from 'react'
import '../../index.css'
import reviewImg from '../../assets/image/download-removebg-preview.png'
import reviewImg2 from '../../assets/image/preview.png'
import reviewImg3 from '../../assets/image/review.png'
import reviewimg4 from '../../assets/image/WhatsApp Image 2024-09-20 at 14.44.33_9dc95166.jpg'

const Review = () => {
  return (
    <div>
        <div class="review-container">
          <h1>Get in Touch</h1>
        </div>
          <div class="sub-review-container">
            <div class="sub-review-two-container">
           <h2>Email:<br/>
            hello@bolajiaderigbe.com<br/>
            </h2>

            <h3> Office address:<br/>
            38b, Raymond Njoku Street, Off Awolowo Rd., Ikoyi,<br/>
            Lagos, Nigeria.</h3><br/>


            <h3>Follow me on social media</h3><br/>

             <div class="review-image">
                 <img src={reviewImg} alt=""/>
                 <img src={reviewImg2} />
                  <img src={reviewImg3} alt=""/>
             </div>
                
          </div>
          <div class="sub-review-image">
            <img src={reviewimg4} alt="" />
          </div>
        </div>
    </div>
  )
}

export default Review