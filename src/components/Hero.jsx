import { Container, HeroImagesSlider, HeroLogosSlider } from '@components';
import { FaTwitter } from 'react-icons/fa';
import { IoLogoDiscord } from 'react-icons/io5';

const Hero = () => {
  return (
    <section className='text-center md:text-left'>
      <Container>
        <h1 className='text-xl md:text-5xl md:leading-[1.3] lg:text-[64px] lg:leading-[1.1]'>
          A HYPE CONCEPT NFT OF ASTRAL APES
        </h1>
      </Container>
      <HeroImagesSlider />
      <Container className='grid gap-12 xl:flex xl:gap-36 xl:justify-between'>
        <p className='text-sm md:text-lg lg:text-xl max-w-[910px]'>
          Astral Apes is our first ever NFT collection and we will continue
          building after the public sale. Every Astral Ape&apos;s holder has a
          voice in this project and will be able to steer the project to
          customize their own NFTs. Customer satisfaction is the most important
          thing to us.
        </p>
        <div className='flex justify-center md:justify-start gap-10'>
          <a href='#' className='text-[44px]'>
            <FaTwitter />
          </a>
          <a href='#' className='text-[44px]'>
            <IoLogoDiscord />
          </a>
        </div>
      </Container>
      <div>
        <p className='hidden'>ASTRAL APES</p>
        <HeroLogosSlider />
      </div>
    </section>
  );
};

export default Hero;
