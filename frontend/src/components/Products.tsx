import { getProducts } from '@/lib/actions/product.action';
import 'swiper/css';
import 'swiper/css/pagination';

import Container from './Container';

import ProductCard from './ProductCard';
import ProductPagination from './ProductPagination';

const Products = async () => {
  const { data: products } = await getProducts({ page: 1, pageSize: 3 });
  return (
    <div className='py-32 bg-parrot bg-cover'>
      <Container>
        <h2 className='font-semibold md:text-3xl text-xl mb-12 md:text-left text-center'>
          Special menu{' '}
          <span className='underline decoration-land underline-offset-8'>
            for you
          </span>
        </h2>
        <div className='grid grid-cols-3 gap-10'>
          {products?.map(({ attributes, id }) => (
            <ProductCard
              key={id}
              name={attributes.name}
              picture={attributes?.image?.data?.attributes?.url}
              price={attributes.price}
              rate={4.8}
            />
          ))}
        </div>

        <ProductPagination />
      </Container>
    </div>
  );
};

export default Products;
