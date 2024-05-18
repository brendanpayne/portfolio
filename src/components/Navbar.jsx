import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../style';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={`
        ${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary
      `}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link 
          to="/"
          className='flex items-center gap-2'
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>
            Brendan Payne&nbsp; 
            <span className='sm:block hidden'>| Software 
            Engineer</span>
          </p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link
                to={`#${link.id}`}
                className={`
                  text-[18px] font-medium cursor-pointer
                  ${active === link.id ? 'text-white' : 'text-secondary'}
                  hover:text-white
                `}
                onClick={() => {
                  setActive(link.id);
                  window.scrollTo(0, 0);
                }}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
        <div
          className='sm:hidden block d-flex flex-column-reverse'
          onClick={() => setToggle(!toggle)}
        >
          <div className={`${!toggle ? 'hidden' : ''} bg-primary opacity-60 navmenu`}>
            <ul className='list-none flex justify-start items-start flex-col gap-4 p-6'>
              {navLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    to={`#${link.id}`}
                    className={`
                      text-[18px] font-medium cursor-pointer
                      ${active === link.id ? 'text-white' : 'text-secondary'}
                      font-poppins font-medium cursor-pointer text-[16px]
                    `}
                    onClick={() => {
                      setToggle(!toggle)
                      setActive(link.id);
                      window.scrollTo(0, 0);
                    }}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <img src={toggle ? close : menu} alt="menu" className='w-6 h-6' />
        </div>
      </div>
    </nav>
  )
}

export default Navbar