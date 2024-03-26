import { ButtonLink, Container } from '@components';
import Ape1 from '@assets/apes/ape-9.avif';
import Ape2 from '@assets/apes/ape-10.avif';
import Ape3 from '@assets/apes/ape-11.avif';
import Ape4 from '@assets/apes/ape-12.avif';
import Ape5 from '@assets/apes/ape-13.avif';
import Ape6 from '@assets/apes/ape-14.avif';

const imagesURL = [Ape1, Ape2, Ape3, Ape4, Ape5, Ape6];

const Artwork = () => {
  return (
    <section id='artwork' className='pt-10'>
      <Container className='grid gap-7 lg:gap-16'>
        <h2>OUR ARTWORK</h2>
        <div className='grid grid-cols-2 gap-3 lg:grid-cols-3 lg:gap-6'>
          {imagesURL.map((imageUrl, index) => (
            <div key={index} className='overflow-hidden'>
              <img
                src={imageUrl}
                className='h-64 w-full object-cover transition-all ease-in-out duration-300 hover:scale-110 lg:h-[664px]'
              />
            </div>
          ))}
        </div>
        <ButtonLink
          type='button'
          className='hidden lg:block lg:justify-self-center'
        >
          View All
        </ButtonLink>
      </Container>
    </section>
  );
};

export default Artwork;
