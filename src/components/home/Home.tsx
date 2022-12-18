import React from 'react';
import About from '../about/About';
import Contact from '../contact/Contact';
import Header from '../header/Header';
import Sidebar from '../sidebar/RightSidebar';

const Home = () => {

  return (
    <>
      <div className='yellow'>
        <div className='react-tabs'>
          <Header />

          <Sidebar />

          <div className='tab-panel_list'>
            <div className="home react-tabs__tab-panel--selected">
              <div className='container-fluid main-container container-home p-0 g-0 aos-init aos-animate'>
                <div className='row home-details-container d-flex align-item-center'>
                  <div className='color-block d-none d-lg-block'></div>
                  <div className='col-lg-3 bg position-absolute d-none d-lg-block'>
                  </div>
                  <div className='col-lg-8 col-12 offset-lg-4 home-details text-lg-start'>
                    <div className='home-details-uppertext'>
                      <h2 className="text-uppercase poppins-font">
                        Hello I'm  <br />
                        <span>
                          Subharaj Narayan Chaudhary
                        </span>
                      </h2>
                      <div className='home-details-language'>

                      </div>
                      <div className='home-details-text'>
                        <p>I'm a Tunisian based web designer & front‑end developer focused on crafting clean & user‑friendly experiences,
                          I am passionate about building excellent software that improves the lives of those around me.</p>
                      </div>
                      <div className='home-details-resume'>
                        <button className='btn btn-primary'>Get In Touch</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='about-section' style={{minHeight: "590px"}}>
              <About />
            </div>
            <div className='contact-section'>
              <Contact />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;