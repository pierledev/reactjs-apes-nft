import { Container } from '@components';
import { MdArrowOutward } from 'react-icons/md';
import Ape from '@assets/apes/ape-1.avif';

const Roadmap = () => {
  return (
    <section id='roadmap' className='pt-14 mb-6'>
      <Container>
        <div className='lg:flex lg:items-center lg:justify-between'>
          <h2>ROADMAP</h2>
          <div className='hidden lg:flex lg:gap-4'>
            <span className='bg-orange w-36 h-5 block'></span>
            <span className='block w-5 h-5 border border-orange'></span>
            <span className='block w-5 h-5 border border-orange'></span>
            <span className='block w-5 h-5 border border-orange'></span>
            <span className='block w-5 h-5 border border-orange'></span>
          </div>
        </div>
        <div className='hidden'>
          <p>PHASE 1 -</p>
          <p>
            PRE-SALE{' '}
            <span>
              <MdArrowOutward />
            </span>
          </p>
        </div>
        <div className='mt-7 mb-6'>
          <img
            src={Ape}
            alt='Ape'
            className='h-36 md:h-40 w-full object-cover object-bottom lg:min-h-[264px] lg:mt-14 lg:mb-16 relative lg:before:content-none lg:before:block lg:before:w-full lg:before:h-full lg:before:border lg:before:border-white lg:before:opacity-50 lg:before:top-16 lg:before:left-5 lg:before:absolute'
          />
        </div>
        <ul className='grid gap-6'>
          <li className='flex items-center gap-[10px] lg:gap-8'>
            <span className='min-w-5 min-h-5 bg-white block'></span>
            <span className='text-xs opacity-70 lg:text-3xl'>
              Early accessors will have a chance to get a pre-sale with a
              reduced price of 1.5 SOL per NFT.
            </span>
          </li>
          <li className='flex items-center gap-[10px] lg:gap-8'>
            <span className='min-w-5 min-h-5 bg-white block'></span>
            <span className='text-xs opacity-70 lg:text-3xl'>
              Don&apos;t miss this opportunity to be an early member of the
              Astral Apes at a discounted price!
            </span>
          </li>
        </ul>
      </Container>
    </section>
  );
};

export default Roadmap;
