import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';                     
const Navbar = () => {
  return (
    <div className='nav' >
          <div className='brandName'>
              
              <h1 className='brand'>Suraj</h1>
            
          </div>
          
          <div className='allNavbar'>
            <div className='navlinks'><AnchorLink href='#HeroPage'>Home</AnchorLink></div>
            <div className='navlinks'><AnchorLink href='#Skills'>Skills</AnchorLink></div>
            <div className='navlinks'><AnchorLink href='#ProjectSec'>Projects</AnchorLink></div>       
            <div className='navlinks'><AnchorLink href='#ContactPage'>Contact</AnchorLink></div>  
            <div className='navlinks'><AnchorLink href='#AboutPage'>About</AnchorLink></div>       
          </div>
    </div>
  )
}

export default Navbar