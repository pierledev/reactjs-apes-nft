import { ButtonLink, Container } from '@components';
import { FaTwitter } from 'react-icons/fa';
import { IoLogoDiscord } from 'react-icons/io5';
import Logo from '@assets/logo.svg';

const Footer = () => {
  return (
    <footer>
      <Container className='text-center grid gap-12 lg:gap-16 lg:pt-0 xl:pt-0 2xl:pt-0'>
        <div className='grid gap-7 lg:border-t lg:border-t-[#535353] lg:pt-16'>
          <p className='slogan'>HYPE . AWSOME . APES </p>
          <p className='text-xs lg:text-base max-w-lg mx-auto'>
            Astral Apes is a collection of 3,333 high quality and uniquely
            generated 3D Apes roaming the Solana&nbsp;Space.
          </p>
          <div className='flex justify-center gap-4'>
            <ButtonLink variant='tetriary'>Insights</ButtonLink>
            <ButtonLink variant='tetriary'>Contact Us</ButtonLink>
          </div>
        </div>
        <div className='border-t border-t-[#535353] pt-12 grid gap-4 items-center lg:pt-16 xl:flex xl:justify-between'>
          <div className='flex gap-2 items-center justify-center logo'>
            <img
              src={Logo}
              alt='Astral Apes Company Logo'
              className='w-7 xl:w-12'
            />
            <p className='xl:text-2xl'>ASTRAL APES</p>
          </div>
          <div className='text-sm opacity-70 xl:leading-6'>
            <div className='xl:flex xl:items-center xl:gap-2'>
              <p>
                ©2024 ASTRAL APES coded by{' '}
                <a
                  href='https://www.github.com/pierledev'
                >
                  PIERLEDEV
                </a>
                .
              </p>
              <p>All rights reserved.</p>
            </div>
            <p>
              Made with <span className='text-red'>❤</span>
            </p>
          </div>
          <div className='flex justify-center gap-8'>
            <a href='#' className='text-3xl xl:text-7xl'>
              <FaTwitter />
            </a>
            <a href='#' className='text-3xl xl:text-7xl'>
              <IoLogoDiscord />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
