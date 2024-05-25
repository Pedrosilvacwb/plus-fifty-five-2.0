import AboutUs from '@/components/AboutUs';
import Delivery from '@/components/Delivery';
import DiscountBanner from '@/components/DiscountBanner';
import Feedback from '@/components/Feedback';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import OurBrand from '@/components/OurBrand';
import Popular from '@/components/Popular';
import Products from '@/components/Products';
import { SearchParamsProps } from '@/types';

export default function Home({ searchParams }: SearchParamsProps) {
  return (
    <div>
      <Header />
      <AboutUs />
      <Popular />
      <Delivery />
      <OurBrand />
      <Products />
      <Feedback />
      <DiscountBanner />
      <Footer />
    </div>
  );
}
