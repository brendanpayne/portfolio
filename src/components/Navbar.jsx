import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from '../style';
import { navLinks, socials } from '../constants';
import { logo } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed left-0 top-0 min-h-screen w-16 bg-primary text-gray-400 flex flex-col items-center py-8 space-y-4 z-50">
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
          {navLinks.map((nav) => (
            <li key={nav.id} className="transform rotate-90">
              <a
                href={`#${nav.id}`}
                className={`
                  text-[18px] font-medium cursor-pointer text-white
                  ${active === nav.id ? 'opacity-100' : 'opacity-70'}
                  hover:opacity-100 transition-opacity duration-300
                `}
                onClick={() => setActive(nav.id)}
              >
                {nav.title}
              </a>
            </li>
          ))}
        </ul>
        <ul className='list-none flex flex-col items-center space-y-[40px]'>
          {socials.map((social) => (
            <li key={social.id}>
              <a
                href={social.url}
                target='_blank'
                rel='noreferrer'
                className={`
                  cursor-pointer
                `}
              >
                <img src={social.icon} alt={social.id} className='w-6 h-6 object-contain opacity-70 hover:opacity-100 transition-opacity duration-300' />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;