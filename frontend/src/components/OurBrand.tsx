import Image from 'next/image';
import coffees from '../../public/others/3-coffees.jpg';
import Container from './Container';
import { Button } from './ui/button';
const OurBrand = () => {
  return (
    <div className='bg-coffee  bg-cover py-12'>
      <Container>
        <div className='flex lg:flex-row flex-col items-center justify-center lg:gap-40 gap-6'>
          <div>
            <Image
              className='w-full lg:max-w-[360px] border-8 rounded-xl border-slate-200 border-opacity-20 shadow-xl -translate-y-24'
              src={coffees}
              alt='Image of 3 coffees'
            />
          </div>
          <div className='w-full lg:max-w-[500px] max-w-[90%] lg:text-left text-center'>
            <h2 className='font-semibold md:text-3xl text-2xl  mb-8 lg:text-left text-center'>
              Our{' '}
              <span className='underline decoration-land underline-offset-8'>
                Brand
              </span>
            </h2>
            <h3 className='font-semibold text-xl w-full lg:max-w-[350px] mb-6 md:text-3xl lg:text-left text-center'>
              We provide quality coffee, and ready to deliver.
            </h3>
            <p className='font-medium md:text-lg text-base mb-9'>
              We are a company that makes and distributes delicious coffees. our
              main product is made with love and available in stores all over
              Australia.
            </p>
            <Button className='bg-forest text-sand rounded-3xl'>
              Get your coffee
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OurBrand;
