'use client';
import Image from 'next/image';

import cart from '../../public/icons/icons_cart.svg';
import logo from '../../public/logo/_LOGO_ROUND_PLUS_FIFTY_FIVE 1.svg';
import Cart from './Cart';
import Container from './Container';
import { Drawer, DrawerTrigger } from './ui/drawer';

const Header = () => {
  return (
    <header className='bg-sand z-50'>
      <Drawer direction='right'>
        <Container>
          <div className='flex items-center justify-between pt-6 bg-none'>
            <Image
              width={160}
              height={160}
              src={logo}
              alt='Plus Fifty Five logo'
            />
            <nav className='md:block hidden'>
              <ul className='flex items-center justify-between gap-8 font-semibold text-lg'>
                <li className='text-land'>
                  <a href='#'>About Us</a>
                </li>
                <li>
                  <a href='#'>Our Products</a>
                </li>
                <li>
                  <a href='#'>Delivery</a>
                </li>
              </ul>
            </nav>
            <div>
              <DrawerTrigger asChild onClick={() => console.log('abriu')}>
                <Image
                  src={cart}
                  alt='Clickable Cart Icon'
                  width={32}
                  height={32}
                />
              </DrawerTrigger>
            </div>
          </div>
        </Container>
        <Cart />
      </Drawer>
    </header>
  );
};

export default Header;
