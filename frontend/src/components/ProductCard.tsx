import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import Image from 'next/image';
import cart from '../../public/icons/white cart.svg';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Select } from './ui/select';

interface ProductCardProps {
  name: string;
  price: number;
  rate: number;
  picture: string;
}

const ProductCard = ({ name, picture, price, rate }: ProductCardProps) => {
  return (
    <div className=' bg-white px-[18px] py-6 rounded-xl border-8 border-opacity-10 drop-shadow-xl'>
      <div className='relative mb-6'>
        <Image
          width={450}
          height={450}
          className='w-full rounded-xl'
          src={`http://localhost:1337${picture}`}
          alt='Product picture'
        />
        <Badge className='absolute top-2 left-3 text-md font-semibold bg-white text-black border-4 border-white-10'>
          {rate}
        </Badge>
      </div>
      <div className='flex items-start justify-between'>
        <div className='flex-1'>
          <h3 className='font-semibold xl:text-2xl text-lg mb-4  line-clamp-1'>
            {name}
          </h3>
          <div>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder='Variation' />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup className='max-h-48'>
                  <SelectItem value='light'>Expresso</SelectItem>
                  <SelectItem value='dark'>Stove top</SelectItem>
                  <SelectItem value='system'>Grain</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className='flex flex-col items-center gap-2'>
          <span className='font-semibold xl:text-2xl text-lg'>{price} AUS</span>

          <Button className='bg-land rounded-full p-3'>
            <Image src={cart} alt='Add to cart button' />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
