"use server";

import axios from "axios";
import { GetProductsProps, Product } from "@/types";

export const getProducts = async (params: GetProductsProps) => {
  try {
    const { page = 1, pageSize = 6 } = params;

    const products = await axios.get(
      process.env.STRAPI_API_URL!! +
        `/products?populate=*&pagination[page]=${page}&pagination[pageSize]=${pageSize}`
    );

    return products.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
