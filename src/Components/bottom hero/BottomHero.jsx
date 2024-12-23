import React from 'react'
import heroBanner from '../../assets/image/hero-banner.png'

import property from '../../assets/image/property-1.jpg'
import property2 from  '../../assets/image/property-2.jpg'
import property3 from '../../assets/image/property-3.jpg'
import property4 from '../../assets/image/property-4.png'
import author from '../../assets/image/author.jpg'
import { IoBedOutline } from "react-icons/io5";
import { IoManOutline } from "react-icons/io5";
import { FaRegSquare } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosCamera } from "react-icons/io";
import { IoFilm } from "react-icons/io5";

import './style.css'

const BottomHero = () => {
  return (
    <div>
    
    <section class="property" id="property">
        <div class="container">

          {/* <p class="section-subtitle">Properties</p> */}

          <h2 class="h2 section-title">Featured Listings</h2>

          <ul class="property-list has-scrollbar">

            <li>
              <div class="property-card">

                <figure class="card-banner">

                  <a href="#">
                    <img src={property} alt="New Apartment Nice View" class="w-100"/> 
                  </a>

                  {/* <div class="card-badge green">For Rent</div> */}

                  <div class="banner-actions">

                    <button class="banner-actions-btn">
                    <IoLocationOutline />

                      <address>Belmont Gardens, Chicago</address>
                    </button>

                    <button class="banner-actions-btn">
                    <IoIosCamera />

                      <span>4</span>
                    </button>

                    <button class="banner-actions-btn">
                    <IoFilm />

                      <span>2</span>
                    </button>

                  </div>

                </figure>

                <div class="card-content">

                  {/* <div class="card-price">
                    <strong>$34,900</strong>/Month
                  </div> */}

                  <h3 class="h3 card-title">
                    <a href="#">New Apartment Nice View</a>
                  </h3>

                  <p class="card-text">
                    Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood
                  </p>

                  <ul class="card-list">

                    <li class="card-item">
                      <strong>3</strong>

                     <IoBedOutline />

                      <span>Bedrooms</span>
                    </li>

                    <li class="card-item">
                      <strong>2</strong>

                   <IoManOutline />

                      <span>Bathrooms</span>
                    </li>

                    <li class="card-item">
                      <strong>3450</strong>

                      <FaRegSquare />

                      <span>Square Ft</span>
                    </li>

                  </ul>

                </div>

                {/* <div class="card-footer">

                  <div class="card-author">

                    <figure class="author-avatar">
                      <img src={author} alt="William Seklo" class="w-100" />
                    </figure>

                    <div>
                      <p class="author-name">
                        <a href="#">William Seklo</a>
                      </p>

                      <p class="author-title">Estate Agents</p>
                    </div>

                  </div>

                  <div class="card-footer-actions">

                    <button class="card-footer-actions-btn">
                      <ion-icon name="resize-outline"></ion-icon>
                    </button>

                    <button class="card-footer-actions-btn">
                      <ion-icon name="heart-outline"></ion-icon>
                    </button>

                    <button class="card-footer-actions-btn">
                      <ion-icon name="add-circle-outline"></ion-icon>
                    </button>

                  </div>

                </div> */}

              </div>
            </li>

            <li>
              <div class="property-card">

                <figure class="card-banner">

                  <a href="#">
                    <img src={property2} alt="Modern Apartments" class="w-100" />
                  </a>

                  {/* <div class="card-badge orange">For Sales</div> */}

                  <div class="banner-actions">

                    <button class="banner-actions-btn">
                    <IoLocationOutline />

                      <address>Belmont Gardens, Chicago</address>
                    </button>

                    <button class="banner-actions-btn">
                    <IoIosCamera />

                      <span>4</span>
                    </button>

                    <button class="banner-actions-btn">
                    <IoFilm />

                      <span>2</span>
                    </button>

                  </div>

                </figure>

                <div class="card-content">

                  {/* <div class="card-price">
                    <strong>$34,900</strong>/Month
                  </div> */}

                  <h3 class="h3 card-title">
                    <a href="#">Modern Apartments</a>
                  </h3>

                  <p class="card-text">
                    Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood
                  </p>

                  <ul class="card-list">

<li class="card-item">
  <strong>3</strong>

 <IoBedOutline />

  <span>Bedrooms</span>
</li>

<li class="card-item">
  <strong>2</strong>

<IoManOutline />

  <span>Bathrooms</span>
</li>

<li class="card-item">
  <strong>3450</strong>

  <FaRegSquare />

  <span>Square Ft</span>
</li>

</ul>

                </div>
{/* 
                <div class="card-footer">

                  <div class="card-author">

                    <figure class="author-avatar">
                      <img src={author} alt="William Seklo" class="w-100" />
                    </figure>

                    <div>
                      <p class="author-name">
                        <a href="#">William Seklo</a>
                      </p>

                      <p class="author-title">Estate Agents</p>
                    </div>

                  </div>

                  <div class="card-footer-actions">

                    <button class="card-footer-actions-btn">
                      <ion-icon name="resize-outline"></ion-icon>
                    </button>

                    <button class="card-footer-actions-btn">
                      <ion-icon name="heart-outline"></ion-icon>
                    </button>

                    <button class="card-footer-actions-btn">
                      <ion-icon name="add-circle-outline"></ion-icon>
                    </button>

                  </div>

                </div> */}

              </div>
            </li>

            <li>
              <div class="property-card">

                <figure class="card-banner">

                  <a href="#">
                    <img src={property3} alt="Comfortable Apartment" class="w-100" />
                  </a>

                  {/* <div class="card-badge green">For Rent</div> */}

                  <div class="banner-actions">

                    <button class="banner-actions-btn">
                    <IoLocationOutline />

                      <address>Belmont Gardens, Chicago</address>
                    </button>

                    <button class="banner-actions-btn">
                    <IoIosCamera />

                      <span>4</span>
                    </button>

                    <button class="banner-actions-btn">
                    <IoFilm />

                      <span>2</span>
                    </button>

                  </div>

                </figure>

                <div class="card-content">

                  {/* <div class="card-price">
                    <strong>$34,900</strong>/Month
                  </div> */}

                  <h3 class="h3 card-title">
                    <a href="#">Comfortable Apartment</a>
                  </h3>

                  <p class="card-text">
                    Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood
                  </p>

                  <ul class="card-list">

<li class="card-item">
  <strong>3</strong>

 <IoBedOutline />

  <span>Bedrooms</span>
</li>

<li class="card-item">
  <strong>2</strong>

<IoManOutline />

  <span>Bathrooms</span>
</li>

<li class="card-item">
  <strong>3450</strong>

  <FaRegSquare />

  <span>Square Ft</span>
</li>

</ul>

                </div>

                {/* <div class="card-footer">

                  <div class="card-author">

                    <figure class="author-avatar">
                      <img src={author} alt="William Seklo" class="w-100" />
                    </figure>

                    <div>
                      <p class="author-name">
                        <a href="#">William Seklo</a>
                      </p>

                      <p class="author-title">Estate Agents</p>
                    </div>

                  </div>

                  <div class="card-footer-actions">

                    <button class="card-footer-actions-btn">
                      <ion-icon name="resize-outline"></ion-icon>
                    </button>

                    <button class="card-footer-actions-btn">
                      <ion-icon name="heart-outline"></ion-icon>
                    </button>

                    <button class="card-footer-actions-btn">
                      <ion-icon name="add-circle-outline"></ion-icon>
                    </button>

                  </div>

                </div> */}

              </div>
            </li>

            <li>
              <div class="property-card">

                <figure class="card-banner">

                  <a href="#">
                    <img src={property4} alt="Luxury villa in Rego Park" class="w-100" />
                  </a>

                  {/* <div class="card-badge green">For Rent</div> */}

                  <div class="banner-actions">

                    <button class="banner-actions-btn">
                    <IoLocationOutline />

                      <address>Belmont Gardens, Chicago</address>
                    </button>

                    <button class="banner-actions-btn">
                    <IoIosCamera />

                      <span>4</span>
                    </button>

                    <button class="banner-actions-btn">
                    <IoFilm />

                      <span>2</span>
                    </button>

                  </div>

                </figure>

                <div class="card-content">

                  {/* <div class="card-price">
                    <strong>$34,900</strong>/Month
                  </div> */}

                  <h3 class="h3 card-title">
                    <a href="#">Luxury villa in Rego Park</a>
                  </h3>

                  <p class="card-text">
                    Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood
                  </p>

                  <ul class="card-list">

<li class="card-item">
  <strong>3</strong>

 <IoBedOutline />

  <span>Bedrooms</span>
</li>

<li class="card-item">
  <strong>2</strong>

<IoManOutline />

  <span>Bathrooms</span>
</li>

<li class="card-item">
  <strong>3450</strong>

  <FaRegSquare />

  <span>Square Ft</span>
</li>

</ul>
                </div>

                {/* <div class="card-footer">

                  <div class="card-author">

                    <figure class="author-avatar">
                      <img src={author} alt="William Seklo" class="w-100" />
                    </figure>

                    <div>
                      <p class="author-name">
                        <a href="#">William Seklo</a>
                      </p>

                      <p class="author-title">Estate Agents</p>
                    </div>

                  </div>

                  <div class="card-footer-actions">

                    <button class="card-footer-actions-btn">
                      <ion-icon name="resize-outline"></ion-icon>
                    </button>

                    <button class="card-footer-actions-btn">
                      <ion-icon name="heart-outline"></ion-icon>
                    </button>

                    <button class="card-footer-actions-btn">
                      <ion-icon name="add-circle-outline"></ion-icon>
                    </button>

                  </div>

                </div> */}

              </div>
            </li>

          </ul>

        </div>
      </section>

      
  
    </div>
  )
}

export default BottomHero