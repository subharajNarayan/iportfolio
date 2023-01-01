import React from 'react';
import { Nav,NavItem, NavLink } from 'reactstrap';

const About = () => {

  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef<any>();

  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);

  const openInNewTab = (url:any) => {
    // 👇️ setting target to _blank with window.open
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="about react-tabs__tab-panel--selected">
      <div className='container-fluid main-container container-about g-0 aos-init aos-animate'>
        <div className='row about-details-container d-flex align-item-center'>
          <div className='color-block d-none d-lg-block'></div>
          <div className={`col-lg-8 col-12 offset-lg-3 about-details text-lg-start fade-in-section ${isVisible ? 'is-visible' : ''}`}
            ref={domRef}>
            {/* <div className='col-lg-8 col-12 offset-lg-3 about-details text-lg-start' > */}
            <div className='about-details-heading'>
              <h1> <strong> A<span>bou</span>t <span> Me </span> </strong></h1>
            </div>
            <div className={`about-details-uppertext mb-4 pt-4 fade-in-section ${isVisible ? 'is-visible' : ''}`} ref={domRef}>
              <span>
                Hello! My name is Subharaj Narayan Chaudhary and
                I enjoy creating things that live on the internet,
                whether that be websites, applications, or anything in between.
                As a Front‑End developer, I bridge the gap between design.
                I always have a keen eye for aesthetics to create a beautiful product.
                <br />
                <br />
                My goal is to build applications that are scalable and
                efficient under the hood while providing engaging,
                pixel-perfect user experiences.
              </span>
            </div>
            {/* <div className='about-details-bottom d-flex'> */}
            <div className={`about-details-bottom d-flex fade-in-section ${isVisible ? 'is-visible' : ''}`}
              ref={domRef}>
              <div className='about-details-resume'>
                <button className='btn btn-primary'>My Resume</button>
              </div>
              <div className='about-details-social-media'>
                <Nav>
                  <NavItem>
                    <NavLink onClick={() => openInNewTab('https://www.linkedin.com/in/subharaj-narayan-chaudhary-3332b8237/')}>
                      <i className="fab fa-linkedin linkedin "></i>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink onClick={() => openInNewTab('https://github.com/subharajNarayan')}>
                      <i className="fab fa-github github "></i>
                      </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink onClick={() => openInNewTab('https://www.instagram.com/subharaj_chaudhary/')}>
                      <i className='fab fa-instagram instagram'></i>
                      </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink  onClick={() => openInNewTab('https://join.skype.com/invite/rs1Z9DCbpfDP')}>
                      <i className='fab fa-skype skype'></i>
                      </NavLink>
                  </NavItem>
                </Nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default About;