import React from 'react'

const About = () => {
  return (
    <div className="about react-tabs__tab-panel--selected">
      <div className='container-fluid main-container container-about p-0 g-0 aos-init aos-animate'>
        <div className='row about-details-container d-flex align-item-center'>
          <div className='color-block d-none d-lg-block'></div>
          <div className='col-lg-8 col-12 offset-lg-3 about-details text-lg-start'>
            <div className='about-details-heading'>
              <h1> Ab<span>out </span>Me</h1>
            </div>
            <div className='about-details-uppertext'>
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;