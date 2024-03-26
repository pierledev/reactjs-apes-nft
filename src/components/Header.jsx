import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from "react-icons/ai";
import logo from '@assets/logo.svg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-20 bg-[#fffff] backdrop-blur-md`}
    >
      <div className='w-full mx-auto flex justify-between items-center p-4 md:px-8 md:py-2 xl:px-20 2xl:px-32 2xl:py-8'>
        <a href='#'>
          <img
            src={logo}
            alt='Astral Aps Company Logo'
            className='w-8 h-8 md:w-14 md:h-14'
          />
        </a>
        <button
          className='w-6 h-6 text-2xl z-20 md:hidden transition-all duration-300 ease-in-out hover:text-orange'
          onClick={() => setIsMenuOpen((prevState) => !prevState)}
        >
          {isMenuOpen ? <AiOutlineClose /> : <FaBars />}
        </button>
        <nav
          className={`fixed top-0 left-0 right-0 bottom-0 min-h-svh md:min-h-0 z-10 px-4 py-16 bg-slate md:bg-transparent md:static md:top-auto md:left-auto md:bottom-auto md:right-auto md:block md:py-0 ${isMenuOpen ? 'block' : 'hidden'}`}
        >
          <ul className='grid gap-6 md:flex md:items-center md:gap-7 lg:gap-10'>
            <li>
              <a
                onClick={() => setIsMenuOpen(false)}
                className='transition-all duration-300 ease-in-out hover:text-orange'
                href='#about'
              >
                About
              </a>
            </li>
            <li>
              <a
                onClick={() => setIsMenuOpen(false)}
                className='transition-all duration-300 ease-in-out hover:text-orange'
                href='#team'
              >
                Our Team
              </a>
            </li>
            <li>
              <a
                onClick={() => setIsMenuOpen(false)}
                className='transition-all duration-300 ease-in-out hover:text-orange'
                href='#roadmap'
              >
                Roadmap
              </a>
            </li>
            <li>
              <a
                onClick={() => setIsMenuOpen(false)}
                className='transition-all duration-300 ease-in-out hover:text-orange'
                href='#artwork'
              >
                Artwork
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
