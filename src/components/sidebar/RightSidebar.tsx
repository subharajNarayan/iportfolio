import React from 'react';
import Hamburger from 'hamburger-react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';


const Sidebar = () => {
  const [isActive, setIsActive] = React.useState(false);
  
  const variants = {
    open: {
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.2,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    open: {
      x: 0,
      opacity: 1,
      transition: {
        x: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      x: -50,
      opacity: 0,
      transition: {
        x: { stiffness: 1000 },
      },
    },
  };

  return (
    <section className='sidebar d-none d-lg-block'>
      <div className='sidebar-menu'>
        <motion.div className='menu-hemburger'>
          <Hamburger toggled={isActive} toggle={setIsActive} duration={0.8} />
        </motion.div>
      </div>
      {isActive && (
        <div className='sidebar-nav'>
          <motion.ul
            variants={variants}
            initial="closed"
            animate={isActive ? 'open' : 'closed'}
            className="menu icon-menu revealator-slideup revealator-once revealator-delay1">
            <motion.li
             className="icon-box"
             variants={itemVariants}
             >
              <Link activeClass="active" className="home-page" to="home" spy={true} smooth={true} duration={500} offset={50}>
                <i className="fas fa-home"></i>
                <h2>Home</h2>
              </Link>
            </motion.li>
            <motion.li 
            className="icon-box"
            variants={itemVariants}
            >
              <Link activeClass="active" className="about-page" to="about-content" spy={true} smooth={true} duration={500} offset={50}>
                <i className='fas fa-user'></i>
                <h2>About</h2>
              </Link>
            </motion.li>
            <motion.li 
            className="icon-box"
            variants={itemVariants}
            >
              <Link activeClass="active" className="portfolio-page" to="projects-content" spy={true} smooth={true} duration={500} offset={50}>
                <i className="fas fa-briefcase"></i>
                <h2>Portfolio</h2>
              </Link>
            </motion.li>
            <motion.li 
            className="icon-box"
            variants={itemVariants}
            >
              <Link activeClass="active" className="contact-page" to="contact-content" spy={true} smooth={true} duration={500} offset={50}>
                <i className="fas fa-envelope-open"></i>
                <h2>Contact</h2>
              </Link>
            </motion.li>
          </motion.ul>
        </div>
      )}
    </section>
  )
}

export default Sidebar;