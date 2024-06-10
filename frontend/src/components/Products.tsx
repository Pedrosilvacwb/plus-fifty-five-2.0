import { getProducts } from "@/lib/actions/product.action";
import "swiper/css";
import "swiper/css/pagination";

import Container from "./Container";

import ProductsCarossel from "./ProductsCarossel";

const Products = async () => {
  const { data: products } = await getProducts({});
  return (
    <div className="py-32 bg-parrot bg-cover">
      <Container>
        <h2 className="font-semibold md:text-3xl text-xl mb-12 md:text-left text-center">
          Special menu{" "}
          <span className="underline decoration-land underline-offset-8">
            for you
          </span>
        </h2>
        <div>
          <ProductsCarossel products={products} />
        </div>
      </Container>
    </div>
  );
};

export default Products;
