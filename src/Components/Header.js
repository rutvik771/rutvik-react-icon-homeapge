import React from 'react'
import { Link } from 'react-router-dom'


export const Header = () => {
  return (
    <>
    <header className="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
  <div className="container">
    <div className="row">
      <div className="col-12">
        <nav className="main-nav">
          {/* ***** Logo Start ***** */}
          <Link to ="index.html" className="logo">
            <h4>SEO Dream <img src="assets/images/logo-icon.png" alt /></h4>
          </Link>
          {/* ***** Logo End ***** */}
          {/* ***** Menu Start ***** */}
          <ul className="nav">
            <li className="scroll-to-section"><Link to ="/" className="active">Home</Link></li>
            <li className="scroll-to-section"><Link to ="features">Features</Link></li>
            <li className="scroll-to-section"><Link to ="about">About Us</Link></li>
            <li className="scroll-to-section"><Link to ="services">Services</Link></li>
            <li className="scroll-to-section"><Link to ="portfolio">Portfolio</Link></li>
            <li className="scroll-to-section"><Link to ="contact">Contact Us</Link></li> 
            <li className="scroll-to-section"><div className="main-blue-button"><Link to ="#contact">Get Your Quote</Link></div></li> 
          </ul>        
          <a className="menu-trigger">
            <span>Menu</span>
          </a>
          {/* ***** Menu End ***** */}
        </nav>
      </div>
    </div>
  </div>
</header>

    </>
  )
}

