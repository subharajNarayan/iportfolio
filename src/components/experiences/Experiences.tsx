
import React from 'react'
import { Nav, NavItem } from 'reactstrap';

type Props = {}

const Experiences = (props: Props) => {

  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef<any>();

  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);

  return (
    <div className="experience react-tabs__tab-panel--selected" >
      <div className='container main-container container-experience g-0 aos-init aos-animate'>
        <div className={`experience-details-heading fade-in-section ${isVisible ? 'is-visible' : ''}`}
          ref={domRef}>
          <h2>My <strong>Experiences</strong></h2>
        </div>
        <div className={`row p-5 container experience-details-container fade-in-section ${isVisible ? 'is-visible' : ''}`}
          ref={domRef}>
          <div className="col-lg-3 col-12 experience-details-company text-lg-start d-flex mt-4">
            <h4><strong> SmartTech </strong>Solution PVT.LTD</h4>
          </div>

          <div className='col-lg-9 col-12 p-4 experience-details-professional'>
            <div className=' pt-1'>
              <div className='flex flex-col w-full experience-details-specialist'>
                <h5 className='text-xl'>Frontend React Developer</h5>
                <p>March 2022 - Present</p>
              </div>
              <div className='flex experience-details-projects'>
                <Nav className='ams mb-3'>
                  <NavItem>
                    <h6>Asset Management System</h6>
                    <span>The asset management tools comprising a web dashboard,
                      a configuration panel and a mobile app are developed to support the management of
                      assets and making asset management plans for water systems.</span>
                    <Nav>
                      <NavItem className='pl-0'>
                        <span>React Framework</span>
                      </NavItem>
                      <span style={{ color: "#3178C6" }} className="dot">•</span>
                      <NavItem>
                        <span >Typescript</span>
                      </NavItem>
                      <span style={{ color: "#F1E05A" }} className="dot">•</span>
                      <NavItem>
                        <span>JavaScript</span>
                      </NavItem>
                      <span style={{ color: "#C6538C" }} className="dot">•</span>
                      <NavItem>
                        <span>SCSS</span>
                      </NavItem>
                      <span style={{ color: "#563d7c" }} className="dot">•</span>
                      <NavItem>
                        <span>Bootstrap</span>
                      </NavItem>
                      <span style={{ color: "#E34C26" }} className="dot">•</span>
                      <NavItem>
                        <span>HTML</span>
                      </NavItem>
                      <span style={{ color: "#563D7C" }} className="dot">•</span>
                      <NavItem>
                        <span>CSS</span>
                      </NavItem>
                      <span style={{ color: "#6a737d" }} className="dot">•</span>
                      <NavItem>
                        <span>Git</span>
                      </NavItem>
                    </Nav>
                  </NavItem>
                </Nav>
                <Nav className='order-sathi mb-3'>
                  <NavItem>
                    <h6>Sales for E-commerce (Order-Sathi)</h6>
                    <span>The Sales and Order for E-commerce(Order-Sathi) comprising a website which developed for
                      buying or selling of products on online services or over the Internet that makes people easier.</span>
                    <Nav>
                      <NavItem className='pl-0'>
                        <span>React Framework</span>
                      </NavItem>
                      <span style={{ color: "#F1E05A" }} className="dot">•</span>
                      <NavItem>
                        <span>JavaScript</span>
                      </NavItem>
                      <span style={{ color: "#563d7c" }} className="dot">•</span>
                      <NavItem>
                        <span>Bootstrap</span>
                      </NavItem>
                      <span style={{ color: "#E34C26" }} className="dot">•</span>
                      <NavItem>
                        <span>HTML</span>
                      </NavItem>
                      <span style={{ color: "#563D7C" }} className="dot">•</span>
                      <NavItem>
                        <span>CSS</span>
                      </NavItem>
                      <span style={{ color: "#6a737d" }} className="dot">•</span>
                      <NavItem>
                        <span>Git</span>
                      </NavItem>
                    </Nav>
                  </NavItem>
                </Nav>
                <Nav className='order-sathi mb-3'>
                  <NavItem>
                    <h6>Down Syndrome of Association (DSSHA-Nepal)</h6>
                    <span>DSSHA-Nepal comparising a website which is a genetic disorder caused by partial copy of abnormal cell division.
                      Caused by abnormal cell division during the sperm or egg cell development.</span>
                    <Nav>
                      <NavItem className='pl-0'>
                        <span>WordPress</span>
                      </NavItem>
                      <span style={{ color: "#563D7C" }} className="dot">•</span>
                      <NavItem>
                        <span>CSS</span>
                      </NavItem>
                      <span style={{ color: "#00758f" }} className="dot">•</span>
                      <NavItem>
                        <span>MySQL</span>
                      </NavItem>
                    </Nav>
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

export default Experiences;