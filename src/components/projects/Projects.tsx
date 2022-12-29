import React from 'react';
import { motion } from 'framer-motion';

import logo from '../../asstes/images/subharaj.jpg';
import ams from '../../asstes/images/projects/ams.png';
import order from '../../asstes/images/projects/order.png';
import dssha from '../../asstes/images/projects/dssha.png';
import portfolio from '../../asstes/images/projects/portfolio.png';
import { NavItem, NavLink } from 'reactstrap';

type Props = {}


const Projects = (props: Props) => {

  const [IsAMS, setIsAMS] = React.useState(false);
  const [IsOrder, setIsOrder] = React.useState(false);
  const [IsDssha, setIsDssha] = React.useState(false);
  const [IsPortfolio, setIsPortfolio] = React.useState(false);

  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef<any>();

  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);

  const openInNewTab = (url: any) => {
    // 👇️ setting target to _blank with window.open
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="projects react-tabs__tab-panel--selected" id='projects-content'>
      <div className='container main-container container-projects g-0 aos-init aos-animate'>
        <div className={`projects-details-heading text-center fade-in-section ${isVisible ? 'is-visible' : ''}`}
          ref={domRef}>
          <h1><strong>Projects</strong> <span>I've Built</span></h1>
          <span>Here are some Example What I've created</span>
        </div>
        <div className={`row pt-5 container projects-details-container d-flex justify-center fade-in-section ${isVisible ? 'is-visible' : ''}`}
          ref={domRef}>
          <div className='col-lg-4 col-12 projects-details-company text-lg-start mt-4'>
            <div className='projects-details-image' onMouseEnter={() => setIsAMS(true)}
              onMouseLeave={() => setIsAMS(false)}>
              <motion.div
                whileHover={{
                  scale: 1.1,
                }}>
                <img src={ams} alt="AMS" width="100%" />
                {IsAMS && (
                  <div className='projects-details-content'>
                    <h2 className='mb-1'>Asset Management System (AMS)</h2>
                    <p className='leading-relaxed'>The asset management tools helps to support the management of
                      assets and making asset management plans for water systems.</p>
                    <NavItem className='ams d-flex'>
                      Link:<NavLink onClick={() => openInNewTab('https://assetmanagementsystem.netlify.app/#/')}>Dashboard</NavLink>
                    </NavItem>
                    <NavItem className='ams d-flex'>
                      Link<NavLink onClick={() => openInNewTab('https://assetmanagementsystem.netlify.app/#/auth/home')}>Config Panel</NavLink>
                    </NavItem>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
          <div className='col-lg-4 col-12 projects-details-company text-lg-start mt-4'>
            <div className='projects-details-image' onMouseEnter={() => setIsDssha(true)}
              onMouseLeave={() => setIsDssha(false)}>
              <motion.div
                whileHover={{
                  scale: 1.1,
                }}>
                <img src={dssha} alt="DSSHA-Nepal" width="100%" />
                {IsDssha && (
                  <div className='projects-details-content'>
                    <h2 className='mb-1'>Down Syndrome of Association (DSSHA-Nepal)</h2>
                    <p className='leading-relaxed'>DSSHA-Nepal is a genetic disorder caused by partial copy of abnormal cell division.
                      Caused by abnormal cell division during the sperm or egg cell development.</p>
                    <NavItem className='d-flex dsa'>
                      Link:<NavLink onClick={() => openInNewTab('https://dssha-nepal.org.np/dssha/')}>DSSHA-Nepal</NavLink>
                    </NavItem>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
          <div className='col-lg-4 col-12 projects-details-company text-lg-start mt-4'>
            <div className='projects-details-image' onMouseEnter={() => setIsOrder(true)}
              onMouseLeave={() => setIsOrder(false)}>
              <motion.div
                whileHover={{
                  scale: 1.1,
                }}>
                <img src={order} alt="Order-Sathi" width="100%" />
                {IsOrder && (
                  <div className='projects-details-content'>
                    <h2 className='mb-1'>Sales and Order of E-commerce(Order Sathi)</h2>
                    <p className='leading-relaxed'>The Sales and Order for E-commerce(Order-Sathi) is for
                      buying or selling of products on online services or over the Internet that makes people easier.</p>
                    <NavItem className='d-flex dsa'>
                      Link:<NavLink onClick={() => openInNewTab('https://dssha-nepal.org.np/dssha/')}>Order-Sathi</NavLink>
                    </NavItem>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
          <div className='col-lg-4 col-12 projects-details-company text-lg-start mt-4'>
            <div className='projects-details-image' onMouseEnter={() => setIsPortfolio(true)}
              onMouseLeave={() => setIsPortfolio(false)}>
              <motion.div
                whileHover={{
                  scale: 1.1,
                }}>
                <img src={portfolio} alt="AMS" width="100%" />
                {IsPortfolio && (
                  <div className='projects-details-content'>
                    <h2 className='mb-1'>PORTFOLIO</h2>
                    <p className='leading-relaxed'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo accusantium tempora quidem vitae laborum consequatur nihil voluptate? Ullam illo provident vel earum tempore, beatae aliquid facilis minima veniam neque magni?</p>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects