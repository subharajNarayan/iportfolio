import React from 'react';
import Hamburger from 'hamburger-react';
import { Link } from 'react-router-dom';
// import {Link} from 'react-scroll';

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
              <Link  to="#home" >
                <i className="fas fa-home"></i>
                <h2>Home</h2>
              </Link>
            </li>
            <li className="icon-box ">
                <Link to="">
                <i className='fas fa-user'></i>
                <h2>About</h2>
                </Link>
            </li>
            <li className="icon-box ">
              <Link to="#">
                <i className="fas fa-briefcase"></i>
                <h2>Portfolio</h2>
              </Link>
            </li>
            <li className="icon-box ">
              <Link to="contact-content">
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