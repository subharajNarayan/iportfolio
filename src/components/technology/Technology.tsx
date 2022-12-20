import React from 'react'
import Tabpanel from './tab/Tabpanel';

type Props = {}

const Technology = (props: Props) => {

  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef<any>();

  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);

  return (
    <div className="technology react-tabs__tab-panel--selected">
      {/* <div className='container-fluid main-container container-technology g-0 aos-init aos-animate'> */}
      <div className={`container-fluid main-container container-technology g-0 aos-init aos-animate fade-in-section ${isVisible ? 'is-visible' : ''}`}
        ref={domRef}>
        <div className='technology-details-container'>
          <div className='technology-details-heading'>
            <h1><strong>Technology</strong><span> I've worked with </span></h1>
          </div>
          <div className={`technology-details-tabpanel fade-in-section ${isVisible ? 'is-visible' : ''}`} ref={domRef}>
            <Tabpanel />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Technology;