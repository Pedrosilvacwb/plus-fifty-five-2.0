import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import cart from "../../../public/icons/white cart.svg";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Select } from "../ui/select";
import useProductCard from "./useProductCard";
import { User } from "@/types";

interface ProductCardProps {
  productId: number;
  name: string;
  price: number;
  rate: number;
  picture: string;
  user: User;
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
}

const ProductCard = ({
  name,
  picture,
  price,
  rate,
  sizes,
  variations,
  productId,
  user,
}: ProductCardProps) => {
  const { addToCart } = useProductCard({ productId, userId: user?.data?.id });

  return (
    <div className=" bg-white px-[18px] py-6 rounded-xl border-8 border-opacity-10 drop-shadow-xl">
      <div className="relative mb-6">
        <Image
          width={450}
          height={450}
          className="w-full rounded-xl"
          src={`http://localhost:1337${picture}`}
          alt="Product picture"
        />
        <Badge className="absolute top-2 left-3 text-md font-semibold bg-white text-black border-4 border-white-10">
          {rate}
        </Badge>
      </div>
      <div className="flex items-start justify-between gap-6">
        <div className="flex-1">
          <h3 className="font-semibold xl:text-2xl text-lg mb-4  line-clamp-1">
            {name}
          </h3>
          <div className="space-y-4">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Variation" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup className="max-h-48">
                  {variations?.data?.map((variation) => (
                    <SelectItem
                      key={variation?.id}
                      value={variation?.attributes?.variation_value}
                    >
                      {variation?.attributes?.variation_category}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Size" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup className="max-h-48">
                  {sizes?.data?.map((size) => (
                    <SelectItem key={size?.id} value={size?.attributes?.value}>
                      {size?.attributes?.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex flex-col items-center  space-y-10">
          <span className="font-semibold xl:text-2xl text-lg">{price} AUS</span>

          <Button onClick={addToCart} className="bg-land rounded-full p-3 ">
            <Image src={cart} alt="Add to cart button" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
