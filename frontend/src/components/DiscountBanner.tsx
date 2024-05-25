import Container from './Container';
import { Button } from './ui/button';

const DiscountBanner = () => {
  return (
    <div className='py-32'>
      <Container>
        <div className='bg-banner bg-cover md:h-[400px] h-[250px] rounded-[24px] flex flex-col items-center justify-center gap-7'>
          <h2 className='text-white font-semibold md:text-3xl text-xl text-center'>
            Subscribe to get 10% discount price
          </h2>
          <Button className='bg-forest py-3 px-8 rounded-full font-semibold'>
            Order now
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default DiscountBanner;
