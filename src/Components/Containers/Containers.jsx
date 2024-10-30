import React from 'react'
import '../../index.css'
import containerImg from '../../assets/image/PropertyConstruction.jpg'
import containerImg2 from '../../assets/image/PropertyManagement.jpg'
import containerImg3 from '../../assets/image/PropertyConsultation.jpg'
import containerimg4 from '../../assets/image/Screenshot (1).png'
import containerImg5 from '../../assets/image/Screenshot (1).png'
import containerImg6 from '../../assets/image/Screenshot (1).png'
import containerImg7 from '../../assets/image/Screenshot (1).png'
import containerImg8 from '../../assets/image/Screenshot (1).png'

const Containers = () => {
  return (
    <div>
         <div class="work-container">
          <h1>Services</h1>

           <h3> PROPERTY DEVELOPMENT/CONSTRUCTION</h3>
            <img src={containerImg} alt=""/>

            <h5>Property construction is more than just erecting buildings; it's about crafting spaces where lives unfold
              and dreams are realized. Bolaji Aderibige and his of dedicated team combines innovative design with
              meticulous craftsmanship to deliver structures that stand the test of time. From the initial blueprint to
              the final touches, we ensure that each project reflects our commitment to quality, sustainability, and
              elegance. Whether it's a residential oasis, a commercial hub, or a mixed-use development, we build with
              the vision of creating environments that inspire and endure.</h5>

              <h2>Property Management</h2>
              <img src={containerImg2} alt=""/>
              <h6> Property management services are designed to transform real estate investments into seamless, hassle
                free experiences. Bolaji Aderibigbe and his team, manage every aspect of your property with precision
                 and care, from tenant relations and maintenance to financial management and regulatory compliance.
                 Our proactive approach ensures that properties are not only well-maintained but also optimized for
                 maximum value. We act as a reliable steward of your assets, providing peace of mind and allowing you to
                 enjoy the benefits of your investment without the day-to-day complexities.
                 --</h6>

                <h2>Real Estate Consultation</h2>
                <img src={containerImg3} alt=""/>
                <h4> Navigating the real estate landscape requires insight, experience, and strategic thinking. Bolaji
                  Aderibigbe provides real estate consultation and transaction services, offering expert guidance every
                  step of the way. Whether you're buying, selling, or investing, we provide comprehensive advice and
                  personalized strategies to help you make informed decisions. His in-depth market knowledge and
                  analytical skills ensure that you achieve optimal outcomes, while commitment to transparency and
                  integrity fosters trust throughout the transaction process. Let me help you turn your real estate goals
                  into reality with confidence and ease.<br/>
                  --</h4>
         </div>

             <div class="landing-container">
                <h1>Projects</h1>
             </div>
                <div class="sub-landing-container">
                  <div class="landing-image">
                    <img src={containerimg4} alt="" />
                     </div>
                  <div class="landing-content">
                
                    <h1>PINNOCK
                        BEACH</h1>
         
                      <h3>
                        A well planned housing project
                       built by Foresight reality partners at,
                        PINNOCK BEACH ESTATE, LEKKI.</h3>
                  </div>
                </div>

                <div class="sub-project-container">
                  <div class="project-content">
        
                    <h1>PINNOCK
                        BEACH</h1>
         
                      <h3>
                        A well planned housing project
                       built by Foresight reality partners at,
                        PINNOCK BEACH ESTATE, LEKKI.</h3>
                  </div>
                 
                  <div class="project-image"> 
                <img src={containerImg5} alt=""/>
                 </div>
                </div>
             
                <div class="sub-landing-container">
                  <div class="landing-image">
                    <img src={containerImg6} alt=""/>
                     </div>
                  <div class="landing-content">
                  
                    <h1>PINNOCK
                        BEACH</h1>
         
                      <h3>
                        A well planned housing project
                       built by Foresight reality partners at,
                        PINNOCK BEACH ESTATE, LEKKI.</h3>
                  </div>
                </div>


                <div class="sub-project-container">
                  <div class="project-content">
        
              
                    <h1>PINNOCK
                        BEACH</h1>
         
                      <h3>
                        A well planned housing project
                       built by Foresight reality partners at,
                        PINNOCK BEACH ESTATE, LEKKI.</h3>
                  </div>
                 
                  <div class="project-image">
                <img src={containerImg7} alt=""/>
                 </div>
                </div>

              <div class="landing-container">
                <h1>Completed Projects</h1>
              </div>

              <div class="sub-landing-container">
                <div class="landing-image">
                  <img src="image/Screenshot (1).png" alt=""/>
                   </div>
                <div class="landing-content">
               
                  <h1>PINNOCK
                      BEACH</h1>
       
                    <h3>
                      A well planned housing project
                     built by Foresight reality partners at,
                      PINNOCK BEACH ESTATE, LEKKI.</h3>
                </div>
              </div>

              
              <div class="sub-project-container">
                <div class="project-content">
      
                  
                  <h1>PINNOCK
                      BEACH</h1>
       
                    <h3>
                      A well planned housing project
                     built by Foresight reality partners at,
                      PINNOCK BEACH ESTATE, LEKKI.</h3>
                </div>
               
                <div class="project-image">
              <img src={containerImg8} alt="" />
          
               </div>
              </div>

    </div>
  )
}

export default Containers