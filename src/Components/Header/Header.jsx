import React, { useState, useCallback } from "react";
import Logo from "../../assets/image/logo.png";
import { IoIosCloseCircle } from "react-icons/io";
import "../../index.css";

// import ProjectPage from '../../Pages/ProjectPage/ProjectPage'
import { GiHamburgerMenu } from "react-icons/gi";

const Header = React.memo(() => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuToggle = () => {
      setMenuOpen(!menuOpen);
  };
  
  return (
    <div>
      <header className="header-large">
        <div class="logo">
          <img src={Logo} alt="" />
        </div>

        {/* <nav className={`menu ${isMenuOpen ? "active":""}`}> */}
        <nav className="menu">
          {" "}
          <ul>
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/aboutus">About</a>
            </li>
            <li>
              <a href="/projectpage">Project</a>
            </li>
            <li>
              <a href="/charity">Charity</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
        {/* <div className="hamburger" onClick={toggleMenu()}><GiHamburgerMenu /></div> */}
      </header>

  
            <header className="header-small">
                <img src={Logo} alt="" />
                <nav>
                <button className="menu-toggle" onClick={menuToggle}>
                        <GiHamburgerMenu />
                    </button>
                    <ul className={`mobile-menu ${menuOpen ? 'active' : ''}`}>
                        
                        <IoIosCloseCircle  onClick={menuToggle}/>
                        <li>
                            <a href="#home">Home</a>
                        </li>
                        <li>
                            <a href="/aboutus">About</a>
                        </li>
                        <li>
                            <a href="/projectpage">Project</a>
                        </li>
                        <li>
                            <a href="/charity">Charity</a>
                        </li>
                        <li>
                            <a href="/contact">Contact</a>
                        </li>
                    </ul>
                </nav>
            </header>
        

    
    </div>

  );
});

export default Header;
