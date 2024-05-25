'use client';
import { Product } from '@/types';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductCard from './ProductCard';

interface ProductsCarosselProps {
  products: Product[];
}
const ProductsCarossel = ({ products }: ProductsCarosselProps) => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={18}
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination]}
    >
      {products?.map(({ attributes, id }) => (
        <SwiperSlide key={id}>
          <ProductCard
            name={attributes.name}
            picture={attributes?.image?.data?.attributes?.url}
            price={attributes.price}
            rate={4.8}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductsCarossel;
