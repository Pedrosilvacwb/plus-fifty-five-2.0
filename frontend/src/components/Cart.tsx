'use client';
import CartProductCart from './CartProductCart';
import { Button } from './ui/button';
import {
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from './ui/drawer';

const Cart = () => {
  return (
    <DrawerContent className='bg-sand flex flex-col rounded-t-[10px] h-full sm:w-[400px] w-[70%] mt-24 fixed bottom-0 right-0'>
      <div className=' w-full flex flex-col justify-between flex-1 '>
        <DrawerHeader>
          <DrawerTitle>Cart</DrawerTitle>
          <DrawerDescription>See the details of your order</DrawerDescription>
        </DrawerHeader>
        <div className='p-4 pb-0'>
          <div className='flex flex-col h-full max-h-[600px] items-center justify-between  space-y-2 overflow-auto px-2'>
            <CartProductCart />
            <CartProductCart />
            <CartProductCart />
          </div>
        </div>
        <DrawerFooter className='item'>
          <div className='flex items-center justify-between'>
            <span>Total</span>
            <span>50.00AUS</span>
          </div>
          <Button>Finish Order</Button>
          <DrawerClose asChild>
            <Button variant='outline'>Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </div>
    </DrawerContent>
  );
};

export default Cart;
