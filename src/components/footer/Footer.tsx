import React from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap'

type Props = {}

const footer = (props: Props) => {

  const openInNewTab = (url:any) => {
    // 👇️ setting target to _blank with window.open
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  
  return (
    <div className="container footer-details relative bg-neutral-900 px-4 pb-6 pt-12 sm:px-8 sm:pt-14 sm:pb-8">
      <div className="flex footer-details-content flex-col items-center gap-y-6">
        {/* <div className="absolute inset-x-0 -top-4 flex justify-center sm:-top-6">
        <a
          className="rounded-full bg-neutral-100 p-1 ring-white ring-offset-2 ring-offset-gray-700/80 focus:outline-none focus:ring-2 sm:p-2"
          href="#">
          <span className="h-6 w-6 bg-transparent sm:h-8 sm:w-8" />
        </a>
      </div> */}
        <div className="footer-details-profile flex gap-x-4 text-neutral-500 mt-3">
          <h5 className='font-bold'>Subharaj Narayan Chaudhary</h5>
          <p className='mt-2 font-bold'>Frontend React Developer</p>
        </div>
        <div className='flex gap-x-4 text-neutral-500 social-media'>
          <Nav className='nav'>
            <NavItem className='pl-0 nav-item'>
              <NavLink className='nav-link' onClick={() => openInNewTab('https://join.skype.com/invite/rs1Z9DCbpfDP')}>
                <i className="fab fa-skype fa-2x skype"></i>
              </NavLink>
            </NavItem>
            <NavItem className='nav-item'>
              <NavLink className='nav-link' onClick={() => openInNewTab('https://github.com/subharajNarayan')}>
                <i className="fab fa-github fa-2x github"></i>
              </NavLink>
            </NavItem>
            <NavItem className='nav-item'>
              <NavLink className='nav-link' onClick={() => openInNewTab('https://www.linkedin.com/in/subharaj-narayan-chaudhary-3332b8237/')} >
                <i className="fab fa-linkedin fa-2x linkedin"></i>
              </NavLink>
            </NavItem>
          </Nav>
        </div>
      </div>
      <div className='footer-details-reserved'>
        <span className="text-sm text-neutral-700 md:text-[15px] font-bold">© 2022 Subharaj Narayan Chaudhary. All right reserved</span>
      </div>
    </div>
  )
}

export default footer