import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import AptosLabs from '@assets/companies-logos/aptos-labs.png';
import Coinbase from '@assets/companies-logos/coinbase.png';
import OpenSea from '@assets/companies-logos/opensea.svg';
import Solsea from '@assets/companies-logos/solsea.svg';
import Uniswap from '@assets/companies-logos/uniswap.svg';

const responsive = {
  upperDesktop: {
    breakpoint: {
      max: 3000,
      min: 1037,
    },
    items: 4,
    partialVisibilityGutter: 120,
  },
  desktop: {
    breakpoint: {
      max: 1536,
      min: 1024,
    },
    items: 3,
    partialVisibilityGutter: 120,
  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0,
    },
    items: 2,
    partialVisibilityGutter: 0,
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 464,
    },
    items: 2,
    partialVisibilityGutter: 30,
  },
};

const HeroLogosSlider = () => {
  return (
    <Carousel
      containerClass='bg-orange py-8'
      additionalTransfrom={0}
      arrows={false}
      // autoPlay
      autoPlaySpeed={10000}
      centerMode={false}
      className=""
      customTransition="all 10000ms linear"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={responsive}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay={false}
      showDots={false}
      sliderClass=""
      slidesToSlide={2}
      swipeable
      transitionDuration={10000}
    >
      <span className='grid place-items-center'>
        <img
          className='h-8 md:h-10 lg:h-12 w-full object-contain'
          src={AptosLabs}
          alt='Aptos Labs Company Logo'
        />
      </span>
      <span className='grid place-items-center'>
        <img
          className='h-8 md:h-10 lg:h-12 w-full object-contain'
          src={OpenSea}
          alt='OpenSea Company Logo'
        />
      </span>
      <span className='grid place-items-center'>
        <img
          className='h-8 md:h-10 lg:h-12 w-full object-contain'
          src={Coinbase}
          alt='Coinbase Company Logo'
        />
      </span>
      <span className='grid place-items-center'>
        <img
          className='h-8 md:h-10 lg:h-12 w-full object-contain'
          src={Uniswap}
          alt='Uniswap Company Logo'
        />
      </span>
      <span className='grid place-items-center'>
        <img
          className='h-8 md:h-10 lg:h-12 w-full object-contain'
          src={Solsea}
          alt='Solsea Company Logo'
        />
      </span>
    </Carousel>
  );
};

export default HeroLogosSlider;
