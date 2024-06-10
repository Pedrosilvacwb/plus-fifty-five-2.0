import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../prisma/prismaClient";
import { NextApiRequest, NextApiResponse } from "next";

export async function GET(req: NextRequest, res: NextResponse) {
  const userId = req.nextUrl.searchParams.get("userId");

  try {
    const cart = await prisma.cart_items.findMany({
      where: {
        cart_items_user_id_links: { every: { user_id: +userId! } },
        is_active: true,
      },
      select: {
        cart_items_product_links: {
          select: { products: { select: { name: true, price: true } } },
        },
        quantity: true,
      },
    });
    return Response.json(cart);
  } catch (error) {
    console.log(error);
    return;
  }
}
