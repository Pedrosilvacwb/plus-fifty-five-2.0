'use client';
import { Variants, motion } from 'framer-motion';
import Image from 'next/image';
import coffeeBottom from '../../public/others/fly_coffee_bottom.png';
import coffee from '../../public/others/fly_coffee_top.png';
import macaw from '../../public/others/macaw picture.png';
import product from '../../public/products/Product 1.png';
import Container from './Container';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
const AboutUs = () => {
  const text: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 200,
      },
    },
  };
  return (
    <>
      {' '}
      <div className='bg-sand md:pb-52'>
        <div className='relative py-28'>
          <Image
            className=' hidden xl:block absolute mx-auto left-0 right-0 -translate-x-[20%] -bottom-16'
            width={1050}
            src={macaw}
            alt='Blue and yellow macaw'
          />
          <Image
            className=' hidden xl:block absolute -top-52 -right-0 -z-10'
            src={coffee}
            alt='Blue and yellow macaw'
          />
          <Image
            className=' hidden xl:block absolute -bottom-72 -left-16'
            src={coffeeBottom}
            alt='Blue and yellow macaw'
          />
          <Container>
            <div className='flex flex-col lg:flex-row md:gap-7 gap-16 items-center md:justify-between'>
              <div className='w-full xl:max-w-[490px] max-w-[90%] z-10'>
                <motion.h1
                  initial={'hidden'}
                  animate='visible'
                  variants={text}
                  className='font-semibold md:text-5xl  text-3xl text-forest mb-11'
                >
                  Enjoy your <span className='text-land'>coffee</span> before
                  your activity
                </motion.h1>
                <p className='font-medium text-lg mb-11'>
                  Boost your productivity and build your mood with a glass of
                  coffee in the morning{' '}
                </p>
                <Button className='font-semibold bg-forest'>Order Now</Button>
              </div>
              <div className='w-full sm:max-w-[420px] max-w-[320px] sm:h-[420px] h-[320px] bg-forest rounded-full flex items-center justify-center relative z-10'>
                <Image src={product} alt='Coffe pack' />
                <Badge className='absolute py-2  px-10 top-12 md:-left-8 -left-4 sm:text-2xl text-lg font-semibold bg-white text-black border-8 border-white-10'>
                  Hazelnut
                </Badge>
                <Badge className='absolute py-2  px-10 bottom-16 left-0 sm:text-2xl text-lg font-semibold bg-white text-black border-8 border-white-10'>
                  18K
                </Badge>
                <Badge className='absolute py-2  px-10 top-24 right-0 sm:text-2xl text-lg font-semibold bg-white text-black border-8 border-white-10'>
                  4.8
                </Badge>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
