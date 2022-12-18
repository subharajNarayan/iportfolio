import React from 'react'

type Props = {}

const Contact = (props: Props) => {
  return (
    <div className="contact react-tabs__tab-panel--selected">
      <div className='container-fluid main-container container p-0 g-0 aos-init aos-animate'>
        <div className='contact-details-heading'>
          <h1> <strong> Get <span>in</span> Touch </strong></h1>
        </div>
        <div className='row contact-details-container d-flex align-item-center'>
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
                    <strong>subharazzchy68@gmail.com</strong>
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
            <form>
              <div className='row contact-form-info'>
                <div className='col-lg-6'>
                  <div className='form-group'>
                    <input type="text" className='form-control' placeholder='Name' />
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='form-group'>
                    <input type="text" className='form-control' placeholder='Email' />
                  </div>
                </div>
              </div>
              <div className='form-group contact-form-message'>
                <textarea name="message" id="message" cols={20} rows={5} className="form-control" placeholder='Message'></textarea>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;