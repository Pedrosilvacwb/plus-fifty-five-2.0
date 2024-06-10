export interface GetProductsProps {
  page?: number;
  pageSize?: number;
}

interface Product {
  id: number;
  attributes: {
    name: string;
    description: string;
    price: number;
    stock: number;
    isAvailable: boolean;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    image: {
      data: {
        id: number;
        attributes: {
          name: string;
          alternativeText: string | null;
          caption: string | null;
          width: number;
          height: number;
          formats: {
            thumbnail: {
              name: string;
              hash: string;
              ext: string;
              mime: string;
              path: string | null;
              width: number;
              height: number;
              size: number;
              sizeInBytes: number;
              url: string;
            };
          };
          hash: string;
          ext: string;
          mime: string;
          size: number;
          url: string;
          previewUrl: string | null;
          provider: string;
          provider_metadata: any; // Valor dinâmico
          createdAt: string;
          updatedAt: string;
        };
      };
    };
    variations: {
      data: {
        id: number;
        attributes: {
          variation_category: string;
          variation_value: string;
          isActive: boolean;
          createdAt: string;
          updatedAt: string;
          publishedAt: string;
        };
      }[];
    };
    sizes: {
      data: {
        id: number;
        attributes: {
          name: string;
          value: string;
          isActive: boolean;
          createdAt: string;
          updatedAt: string;
          publishedAt: string;
        };
      }[];
    };
  };
}

export interface SearchParamsProps {
  searchParams: { [key: string]: string | undefined };
}

export interface AddToCartParams {
  userId: number;
  productId: number;
}

export interface GetCartProductsParams {
  userId: number;
}

export interface RegisterUserProps {
  username: string;
  password: string;
  email: string;
}

export interface LoginUserProps {
  identifier: string;
  password: string;
}

export interface User {
  ok: boolean;
  data: { [key: string]: any } | null;
  error: { [key: string]: any } | null;
}

export interface CartProducts {
  cart_items_product_links: {
    products: {
      name: string;
      price: string;
    };
  }[];
  cart_items_cart_links: {
    id: number;
    cart_item_id: number;
    cart_id: number;
    cart_item_order: number | null;
  }[];
  quantity: number;
}
