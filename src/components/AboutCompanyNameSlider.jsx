import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { GoDotFill } from 'react-icons/go';

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
      max: 3000,
      min: 1024,
    },
    items: 2,
    partialVisibilityGutter: 40,
  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 375,
    },
    items: 1,
    partialVisibilityGutter: 120,
  },
  smallerMobile: {
    breakpoint: {
      max: 374,
      min: 0,
    },
    items: 1,
    partialVisibilityGutter: 80,
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 464,
    },
    items: 2,
    partialVisibilityGutter: 5,
  },
};

const AboutCompanyNameSlider = () => {
  return (
    <Carousel
      autoPlay
      additionalTransfrom={0}
      autoPlaySpeed={1000}
      centerMode={false}
      className='about-company-name-slider'
      containerClass='bg-orange py-5 lg:py-7'
      arrows={false}
      dotListClass=''
      draggable
      focusOnSelect={false}
      infinite
      itemClass='team-item'
      keyBoardControl
      minimumTouchDrag={80}
      partialVisible
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={responsive}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      showDots={false}
      sliderClass=''
      slidesToSlide={1}
      swipeable
    >
      <div className='flex items-center gap-4'>
        <span className='whitespace-nowrap'>ASTRAL APES</span>
        <span className='flex items-center'>
          <GoDotFill />
        </span>
      </div>
      <div className='flex items-center gap-4'>
        <span className='whitespace-nowrap'>ASTRAL APES</span>
        <span className='flex items-center'>
          <GoDotFill />
        </span>
      </div>
      <div className='flex items-center gap-4'>
        <span className='whitespace-nowrap'>ASTRAL APES</span>
        <span className='flex items-center'>
          <GoDotFill />
        </span>
      </div>
      <div className='flex items-center gap-4'>
        <span className='whitespace-nowrap'>ASTRAL APES</span>
        <span className='flex items-center'>
          <GoDotFill />
        </span>
      </div>
      <div className='flex items-center gap-4'>
        <span className='whitespace-nowrap'>ASTRAL APES</span>
        <span className='flex items-center'>
          <GoDotFill />
        </span>
      </div>
    </Carousel>
  );
};

export default AboutCompanyNameSlider;
