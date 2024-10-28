import React from 'react'
import '../../index.css'
import ServiceImg from '../../assets/image/Screenshot (1).png'

const Project = () => {
  return (
    <div>
  <div class="Project-container">
      <h1>Projects</h1>
     </div>
        <div class="sub-project-container">
          <div class="project-content">

             
            <h1>PINNOCK
                BEACH</h1>
 
              <h3>
                A well planned housing project<br/>
               built by Foresight reality partners at,<br/>
                PINNOCK BEACH ESTATE, LEKKI.</h3><br/>
          </div>
         
          <div class="project-image">
        <img src={ServiceImg} alt=""/>
         </div>
        </div>
    </div>
  )
}

export default Project