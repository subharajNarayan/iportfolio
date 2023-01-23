import React from 'react';
import Hamburger from 'hamburger-react';
import { Link } from 'react-scroll';

const Sidebar = () => {
  const [isActive, setIsActive] = React.useState(false);

  return (
    <section className='sidebar d-none d-lg-block'>
      <div className='sidebar-menu'>
        <div className='menu-hemburger'>
          <Hamburger toggled={isActive} toggle={setIsActive} duration={0.8} />
        </div>
      </div>
      {isActive && (
        <div className='sidebar-nav'>
          <ul className=" icon-menu revealator-slideup revealator-once revealator-delay1">
            <li className="icon-box ">
              <Link activeClass="active" className="home-page" to="home" spy={true} smooth={true} duration={500} offset={50}>
                <i className="fas fa-home"></i>
                <h2>Home</h2>
              </Link>
            </li>
            <li className="icon-box ">
            <Link activeClass="active" className="about-page" to="about-content" spy={true} smooth={true} duration={500} offset={50}>
                <i className='fas fa-user'></i>
                <h2>About</h2>
              </Link>
            </li>
            <li className="icon-box ">
              <Link activeClass="active" className="portfolio-page" to="projects-content" spy={true} smooth={true} duration={500} offset={50}>
                <i className="fas fa-briefcase"></i>
                <h2>Portfolio</h2>
              </Link>
            </li>
            <li className="icon-box ">
              <Link activeClass="active" className="contact-page" to="contact-content" spy={true} smooth={true} duration={500} offset={50}>
                <i className="fas fa-envelope-open"></i>
                <h2>Contact</h2>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </section>
  )
}

export default Sidebar;