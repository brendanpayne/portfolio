import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../style';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="fixed left-0 top-0 min-h-screen w-16 bg-primary text-gray-400 flex flex-col items-center py-8 space-y-4 z-10">
      <div className='mb-8'>
        <Link
          to="/"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className='w-9 h-9 object-contain' />
        </Link>
      </div>
      <div className='flex flex-1 flex-col justify-between'>
        <ul className='list-none flex flex-col items-center space-y-[50px]'>
          {navLinks.map((link) => (
            <li key={link.id} className="transform rotate-90">
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
        <ul className='list-none flex flex-col items-center space-y-[40px]'>
          <li className='text-[12px] transform rotate-90'><a href="mailto:brendan@iampayne.com" className='hover:text-white'>Email</a></li>
          <li className='text-[12px] transform rotate-90'><a href="https://github.com/brendanpayne" className='hover:text-white'>GitHub</a></li>
          <li className='text-[12px] transform rotate-90'><a href="https://linkedin.com/in/payneb2" className='hover:text-white'>LinkedIn</a></li>
          <li className='text-[12px] transform rotate-90'><a href="https://twitter.com/username" className='hover:text-white'>Twitter</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;