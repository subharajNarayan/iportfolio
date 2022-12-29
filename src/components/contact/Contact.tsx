import React from 'react';
import { send } from 'emailjs-com';

type Props = {}


// Gmail serviceID = service_rcfyljn

// Gmail TemplateID = template_21q0ju5

// Gmail PublicKEY = SczQnJeIS8s0MGppd

// Gmail PrivateKEY = vZwXkZKiyJr5dj1IA-_OL

const Contact = (props: Props) => {

  const [toSend, setToSend] = React.useState({
    to_name: '',
    from_name: '',
    message: '',
  });

  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef<any>();
  
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);

  const onSubmit = (e:any) => {
    e.preventDefault();
    send(
      'service_rcfyljn',
      'template_21q0ju5',
      toSend,
      'SczQnJeIS8s0MGppd'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  const handleChange = (e:any) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div className="contact react-tabs__tab-panel--selected">
      <div className={`container-fluid main-container container g-0 aos-init aos-animate fade-in-section ${isVisible ? 'is-visible' : ''}`}
            ref={domRef}>
              {/* <div className='container-fluid main-container container p-0 g-0 aos-init aos-animate'> */}
        <div className='contact-details-heading'>
          <h1> <strong> Get <span>in</span> Touch </strong></h1>
          <span className='title-bg'>Contact</span>
        </div>
        <div className={`row contact-details-container d-flex align-item-center fade-in-section ${isVisible ? 'is-visible' : ''}`}
            ref={domRef}>
          <div className='col-lg-5 col-12 contact-details-leftsidebar'>
            <h3 className='pb-3'>Don't be Shy</h3>
            <p>Feel free to get in touch with me. I am always open to discussing new projects,
              creative ideas or opportunities to be part of your visions.</p>
            <div className='contact-details-address pb-2'>
              <ul>
                <li>
                  <i className='fas fa-map'></i>
                  <span>
                    Address Point <br />
                    <strong>Duhabi-2, Sunsari, Nepal</strong>
                  </span>
                </li>
                <li>
                  <i className="fas fa-envelope"></i>
                  <span className='d-inline-block'>
                    Mail Me
                  </span>
                  <a href="mailto:subharazzchy68@gmail.com">
                    <strong style={{marginLeft:"5px"}}>subharazzchy68@gmail.com</strong>
                  </a>
                </li>
                <li className='pt-5'>
                  <i className="fas fa-phone-square"></i>
                  <span className='d-inline-block'>
                    Call Me
                  </span>
                  <a href="tel:+9779819319611">
                    <strong>+977 9819319611</strong>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className='col-lg-7 col-12 contact-form text-lg-start'>
            <form onSubmit={onSubmit}>
              <div className='row contact-form-info'>
                <div className='col-lg-6'>
                  <div className='form-group name'>
                    <input type="text" className='form-control' 
                    name='to_name'
                    onChange={handleChange}
                    value={toSend.to_name}
                    placeholder='Name' />
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='form-group email'>
                    {/* <label htmlFor="">Email</label> */}
                    <input type="text" className='form-control' 
                    name='from_name'
                    onChange={handleChange}
                    value={toSend.from_name}
                    placeholder='Email'/>
                  </div>
                </div>
              </div>
              <div className='form-group contact-form-message'>
                <textarea name="message" id="message" 
                cols={20} rows={5} 
                className="form-control" 
                onChange={handleChange}
                value={toSend.message}
                placeholder='Message'>
                </textarea>
              </div>
              <div className='contact-form-button'>
                <button type='submit' className='btn btn-outline-primary'>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;