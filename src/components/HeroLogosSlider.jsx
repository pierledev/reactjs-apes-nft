import Marquee from "react-fast-marquee";
import AptosLabs from '@assets/companies-logos/aptos-labs.png';
import Coinbase from '@assets/companies-logos/coinbase.png';
import OpenSea from '@assets/companies-logos/opensea.svg';
import Solsea from '@assets/companies-logos/solsea.svg';
import Uniswap from '@assets/companies-logos/uniswap.svg';

const HeroLogosSlider = () => {
  return (
    <Marquee pauseOnHover autoFill className='bg-orange py-5'>
      <span className='grid place-items-center mr-10'>
        <img
          className='h-5 md:h-6 lg:h-8 w-full object-contain'
          src={AptosLabs}
          alt='Aptos Labs Company Logo'
        />
      </span>
      <span className='grid place-items-center mr-10'>
        <img
          className='h-8 md:h-10 lg:h-12 w-full object-contain'
          src={OpenSea}
          alt='OpenSea Company Logo'
        />
      </span>
      <span className='grid place-items-center mr-10'>
        <img
          className='h-5 md:h-6 lg:h-8 w-full object-contain'
          src={Coinbase}
          alt='Coinbase Company Logo'
        />
      </span>
      <span className='grid place-items-center mr-10'>
        <img
          className='h-8 md:h-10 lg:h-12 w-full object-contain'
          src={Uniswap}
          alt='Uniswap Company Logo'
        />
      </span>
      <span className='grid place-items-center mr-10'>
        <img
          className='h-6 md:h-7 lg:h-9 w-full object-contain'
          src={Solsea}
          alt='Solsea Company Logo'
        />
      </span>
    </Marquee>
  );
};

export default HeroLogosSlider;
