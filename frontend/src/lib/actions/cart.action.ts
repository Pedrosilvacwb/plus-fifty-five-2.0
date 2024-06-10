"use server";
import { AddToCartParams, CartProducts, GetCartProductsParams } from "@/types";
import prisma from "../../../prisma/prismaClient";
import { revalidatePath } from "next/cache";

export const addProductToCart = async (
  params: AddToCartParams
): Promise<any> => {
  try {
    const { productId, userId } = params;

    // Find or create cart
    let cart = await prisma.carts.findFirst({
      where: { cart_id: userId.toString() },
    });
    const currentDate = new Date().toISOString();

    if (!cart) {
      const cartPayload = {
        cart_id: userId.toString(),
        created_at: currentDate,
        updated_at: currentDate,
        published_at: currentDate,
      };
      cart = await prisma.carts.create({ data: cartPayload });
    }

    // Check if cart item exists
    const cartItemExists = await prisma.cart_items.findFirst({
      where: {
        cart_items_user_id_links: { every: { user_id: userId } },
        cart_items_product_links: { every: { product_id: productId } },
        is_active: true,
      },
      include: { cart_items_product_links: true },
    });

    // Add new cart item if it doesn't exist
    if (!cartItemExists) {
      const cartItem = await prisma.cart_items.create({
        data: {
          cart_items_cart_links: { create: { cart_id: cart.id } },
          cart_items_product_links: { create: { product_id: productId } },
          created_at: currentDate,
          is_active: true,
          published_at: currentDate,
          quantity: 1,
          updated_at: currentDate,
          cart_items_user_id_links: { create: { user_id: userId } },
        },
      });

      revalidatePath("/");
      return cartItem;
    }

    // Update quantity if cart item exists
    const updatedCartItem = await prisma.cart_items.update({
      where: { id: cartItemExists.id },
      data: {
        quantity: cartItemExists.quantity! + 1,
        updated_at: currentDate,
      },
    });

    revalidatePath("/");
    return updatedCartItem;
  } catch (error) {
    console.error("Error adding product to cart:", error);
    throw error;
  }
};
