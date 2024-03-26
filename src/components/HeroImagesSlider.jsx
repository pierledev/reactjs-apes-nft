import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import Ape1 from '@assets/apes/ape-1.avif';
import Ape2 from '@assets/apes/ape-2.avif';
import Ape3 from '@assets/apes/ape-3.avif';
import Ape4 from '@assets/apes/ape-4.avif';

const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024,
    },
    items: 3,
    partialVisibilityGutter: 40,
  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0,
    },
    items: 2,
    partialVisibilityGutter: 16,
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

const HeroImagesSlider = () => {
  return (
    <Carousel
      // autoPlay
      additionalTransfrom={0}
      autoPlaySpeed={3000}
      centerMode={false}
      className=''
      containerClass='ml-4 md:ml-8 xl:ml-20 2xl:ml-32'
      arrows={false}
      dotListClass=''
      draggable
      focusOnSelect={false}
      infinite
      itemClass=''
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
      <img
        className='min-h-40 min-w-40 object-cover'
        src={Ape1}
        alt='Ape NFT 1'
      />
      <img
        className='min-h-40 min-w-40 object-cover'
        src={Ape2}
        alt='Ape NFT 2'
      />
      <img
        className='min-h-40 min-w-40 object-cover'
        src={Ape3}
        alt='Ape NFT 3'
      />
      <img
        className='min-h-40 min-w-40 object-cover'
        src={Ape4}
        alt='Ape NFT 4'
      />
    </Carousel>
  );
};

export default HeroImagesSlider;
