import React from 'react';

const About = () => {

  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef<any>();

  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);

  return (
    <div className="about react-tabs__tab-panel--selected" id='about-content'>
      <div className='container-fluid main-container container-about p-0 g-0 aos-init aos-animate'>
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
                <ul>
                  <li>
                    <a href="https://www.linkedin.com/in/subharaj-narayan-chaudhary-3332b8237/" target="_blank"><i className="fab fa-linkedin linkedin"></i></a>
                  </li>
                  <li>
                    <a href="https://github.com/subharajNarayan" target="_blank"><i className="fab fa-github github"></i></a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/subharaj_chaudhary/" target="_blank"><i className='fab fa-instagram instagram'></i></a>
                  </li>
                  <li>
                    <a href="https://join.skype.com/invite/rs1Z9DCbpfDP" target="_blank"><i className='fab fa-skype skype'></i></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default About;