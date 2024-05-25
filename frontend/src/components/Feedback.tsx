'use client';
import { feedbacks } from '@/constants/feedbacks';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Container from './Container';
import FeedbackCard from './FeedbackCard';
const Feedback = () => {
  return (
    <div className='bg-coffee  bg-cover'>
      <Container>
        <div className='py-32 flex md:flex-row flex-col items-center justify-between md:gap-0 gap-8'>
          <div className='w-full max-w-[520px]'>
            <h2 className='font-semibold md:text-3xl text-xl md:text-left text-center mb-6'>
              What they say about us
            </h2>
            <p className='md:text-lg text-base font-medium'>
              We always provide the best service and always maintain the quality
              of coffee
            </p>
          </div>
          <div className='w-full max-w-80 mx-auto md:translate-x-0 translate-x-8'>
            <Swiper
              initialSlide={1}
              style={{
                '--swiper-pagination-color': '#dfa357',
                '--swiper-pagination-bullet-inactive-color': '#999999',
                '--swiper-pagination-bullet-inactive-opacity': '1',
                '--swiper-pagination-bullet-size': '16px',
                '--swiper-pagination-bullet-horizontal-gap': '6px',
              }}
              slidesPerView={1}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
              spaceBetween={32}
              pagination={{
                dynamicBullets: true,
              }}
              modules={[Pagination]}
            >
              {feedbacks.map(({ id, name, photo, text }) => (
                <SwiperSlide key={id}>
                  <FeedbackCard name={name} picture={photo} text={text} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Feedback;
