"use client";
import { Product, User } from "@/types";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "./ProductCard/ProductCard";

interface ProductsCarosselProps {
  products: Product[];
  user: User;
}
const ProductsCarossel = ({ products, user }: ProductsCarosselProps) => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={18}
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination]}
    >
      {products?.map((product: Product) => (
        <SwiperSlide key={product?.id}>
          <ProductCard
            user={user}
            productId={product?.id}
            name={product?.attributes?.name}
            picture={product?.attributes?.image?.data?.attributes?.url}
            price={product?.attributes?.price}
            rate={4.8}
            sizes={product?.attributes?.sizes}
            variations={product?.attributes?.variations}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductsCarossel;
