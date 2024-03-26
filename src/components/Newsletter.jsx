import { ButtonLink, Container } from '@components';

const Newsletter = () => {
  return (
    <section className='mt-7 mb-11 bg-orange'>
      <Container className='grid gap-6 py-11 lg:py-[134px] lg:px-[240px] lg:gap-10'>
        <h2 className='text-center lg:leading-tight'>
          GET UPDATE THE LATEST OF OUR ARTWORK
        </h2>
        <form className='w-full mx-auto min-[375px]:w-auto grid min-[375px]:grid-cols-[auto_auto] lg:grid-cols-[300px_1fr] border border-white'>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='Enter your email address'
            className='w-full py-[10px] px-4 text-xs lg:text-base bg-orange placeholder:text-white placeholder:opacity-70 text-center sm:text-left'
            required
          />
          <ButtonLink type='submit' variant='secondary'>
            Subscribe
          </ButtonLink>
        </form>
      </Container>
    </section>
  );
};

export default Newsletter;
