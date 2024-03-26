import { AboutCompanyNameSlider, Container } from '@components';
import Ape from '@assets/apes/ape-8.avif';

const About = () => {
  return (
    <section className='text-center pt-10 md:text-left' id='about'>
      <Container className='pb-0'>
        <h2>ABOUT</h2>
        <p className='my-7 max-w-xl mx-auto text-sm md:text-lg lg:text-xl md:ml-0 md:max-w-full lg:mb-12l'>
          In our core team, we have a skilled and dedicated team of world-class
          Artists, experts in the NFT market and marketers. We are confident of
          achieving our goals and are ready to introduce our A-apes collection!{' '}
        </p>
        <img src={Ape} alt='Ape with Helmet' className='w-full object-cover' />
      </Container>
      <AboutCompanyNameSlider />
    </section>
  );
};

export default About;
