import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import Ape1 from '@assets/apes/ape-6.avif';
import Ape2 from '@assets/apes/ape-7.avif';
import Ape3 from '@assets/apes/ape-5.avif';

const teams = [
  {
    id: 'team-1',
    name: 'Astral Apes David',
    image: Ape1,
    role: 'Smart Contracts',
    bio: 'He has worked in the blockchain industry for 10 years and is the most sincere and passionate person.',
  },
  {
    id: 'team-2',
    name: 'Astral Apes Jay',
    image: Ape2,
    role: 'Art Director & Design',
    bio: 'A 3D graphic designer and creative director with 20 years of experience. Now builds a future with Astral Apes.',
  },
  {
    id: 'team-3',
    name: 'Astral Apes Jacky',
    image: Ape3,
    role: 'Smart Contracts',
    bio: 'He has worked in the blockchain industry for 6 years and is the most humble and happy person.',
  },
];

const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024,
    },
    items: 3,
    partialVisibilityGutter: 0,
  },
  mobile: {
    breakpoint: {
      max: 460,
      min: 0,
    },
    items: 1,
    partialVisibilityGutter: 0,
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 461,
    },
    items: 2,
    partialVisibilityGutter: 0
  },
};

const TeamImagesSlider = () => {
  return (
    <Carousel
        // autoPlay
      additionalTransfrom={0}
      autoPlaySpeed={3000}
      centerMode={false}
      itemClass='team-item'
      className=''
      containerClass=''
      arrows={false}
      dotListClass=''
      draggable
      focusOnSelect={false}
      infinite={false}
      keyBoardControl
      minimumTouchDrag={80}
      partialVisible
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={responsive}
      rewind={true}
      rewindWithAnimation={true}
      rtl={false}
      shouldResetAutoplay
      showDots={false}
      sliderClass=''
      slidesToSlide={1}
      swipeable
    >
      {teams.map((team) => (
        <div key={team.id} className='grid xl:gap-4'>
          <img
            src={team.image}
            alt={team.name}
            className='py-7 object-cover xl:min-h-[664px]'
          />
          <div className='grid gap-3 lg:gap-6'>
            <h3 className='max-w-[130px] lg:max-w-[300px] lg:text-4xl'>
              {team.name}
            </h3>
            <p className='text-xs opacity-90 font-medium lg:text-2xl'>
              {team.role}
            </p>
            <p className='text-xs lg:text-xl opacity-70'>{team.bio}</p>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default TeamImagesSlider;
