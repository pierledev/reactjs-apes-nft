import Marquee from 'react-fast-marquee';
import { GoDotFill } from 'react-icons/go';

const AboutCompanyNameSlider = () => {
  return (
    <Marquee autoFill pauseOnHover className='bg-orange py-5 lg:py-7 about-company-name-slider'>
      <span className='whitespace-nowrap mr-10'>ASTRAL APES</span>
      <span className='flex items-center mr-10'>
        <GoDotFill />
      </span>
    </Marquee>
  );
};

export default AboutCompanyNameSlider;
