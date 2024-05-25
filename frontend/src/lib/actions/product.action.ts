'use server';

import { GetProductsProps } from '@/types';

export const getProducts = async (params: GetProductsProps) => {
  try {
    const { page = 1, pageSize = 6 } = params;

    const products = await fetch(
      process.env.STRAPI_API_URL!! +
        `/products?populate=*&pagination[page]=${page}&pagination[pageSize]=${pageSize}`
    );

    return await products.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
};
