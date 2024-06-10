import { getProducts } from "@/lib/actions/product.action";
import Container from "./Container";
import ProductsCarossel from "./ProductsCarossel";
import { getUserMeLoader } from "@/services/AuthService";

const Popular = async () => {
  const { data: products } = await getProducts({ pageSize: 3 });
  const user = await getUserMeLoader();
  return (
    <div className="-translate-y-[340px] lg:block hidden">
      <Container>
        <h2 className="lg:text-3xl text-2xl font-semibold mb-12">
          Pupular{" "}
          <span className="underline decoration-4 decoration-land underline-offset-[6px]">
            Now
          </span>
        </h2>
        <div className="bg-land w-full xl:max-w-[1260px] lg:max-w-[960px] max-w-[90%] lg:h-[360px] h-[300px] rounded-[60px]  absolute -z-10 mx-auto right-0 left-0 translate-y-28" />
        <div className="flex items-center justify-between  h-full px-16">
          <ProductsCarossel user={user} products={products} />
        </div>
      </Container>
    </div>
  );
};

export default Popular;
