import React from 'react'
import '../../index.css'
import service from '../../assets/image/service-1.png'
import service2 from '../../assets/image/service-2.png'
import service3 from '../../assets/image/service-3.png'

const Containers = () => {
  return (
  <div>
        <section class="service" id="service">
        <div class="container">

          {/* <p class="section-subtitle">Our Services</p> */}

          <h2 class="h2 section-title">Our Main Focus</h2>

          <ul class="service-list">

            <li>
              <div class="service-card">

                <div class="card-icon">
                  <img src={service} alt="Service icon" />
                </div>

                <h3 class="h3 card-title">
                  <a href="#">Property Development</a>
                </h3>

                <p class="card-text">
                From the initial blueprint to the final touches, we ensure that each project reflects our commitment to quality, sustainability, and elegance.
                </p>

                <a href="#" class="card-link">
                  <span>Find A Home</span>

                  <ion-icon name="arrow-forward-outline"></ion-icon>
                </a>

              </div>
            </li>

            <li>
              <div class="service-card">

                <div class="card-icon">
                  <img src={service2}alt="Service icon" />
                </div>

                <h3 class="h3 card-title">
                  <a href="#">Property Management</a>
                </h3>

                <p class="card-text">
                Our proactive approach ensures that properties are not only well-maintained but also optimized for maximum value.
                </p>

                <a href="#" class="card-link">
                  <span>Find A Home</span>

                  <ion-icon name="arrow-forward-outline"></ion-icon>
                </a>

              </div>
            </li>

            <li>
              <div class="service-card">

                <div class="card-icon">
                  <img src={service3} alt="Service icon" />
                </div>

                <h3 class="h3 card-title">
                  <a href="#">Real Estate Consultation</a>
                </h3>

                <p class="card-text">
                Whether you're buying, selling, or investing, we provide comprehensive advice and personalized strategies to help you make informed decisions.
                </p>

                <a href="#" class="card-link">
                  <span>Find A Home</span>

                  <ion-icon name="arrow-forward-outline"></ion-icon>
                </a>

              </div>
            </li>

          </ul>

        </div>
      </section>

     </div>
  )
}

export default Containers