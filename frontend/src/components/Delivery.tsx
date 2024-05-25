import { deliveryInfo } from '@/constants/deliveryInfo';
import Image from 'next/image';
import Container from './Container';

const Delivery = () => {
  return (
    <div className='bg-parrot bg-cover md:pb-64 pb-32 md:pt-0 pt-32 relative'>
      <Container>
        <h2 className='font-semibold md:text-3xl text-2xl  mb-8 lg:text-left text-center'>
          How to use delivery{' '}
          <span className='underline decoration-land underline-offset-8'>
            service
          </span>
        </h2>
        <div className='flex lg:flex-row flex-col items-center justify-between py-4 px-4 gap-11 lg:gap-0'>
          {deliveryInfo.map(({ id, image, text, title }) => (
            <div
              className='text-center flex flex-col items-center gap-4'
              key={id}
            >
              <Image width={160} height={160} src={image} alt='' />
              <h3 className='font-semibold md:text-2xl text-xl'>{title}</h3>
              <p className='font-medium md:text-lg text-base'>{text}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Delivery;
