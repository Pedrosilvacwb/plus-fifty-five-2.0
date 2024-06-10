import Image from "next/image";
import coffee from "../../../public/products/Product 2.jpg";
import { Button } from "../ui/button";

interface CartProductCardProps {
  quantity: number;
}
const CartProductCard = ({ quantity }: CartProductCardProps) => {
  return (
    <div className="flex items-center justify-between w-full  bg-white px-2 py-2 rounded-xl border-4 border-opacity-10 drop-shadow-xl">
      <div className="sm:h-16 sm:w-16 w-10 h-10">
        <Image
          className=" sm:h-16 sm:w-16 w-10 h-10  object-cover rounded-full"
          src={coffee}
          alt=""
        />
      </div>
      <h3 className="">Product name</h3>
      <div className="flex items-center justify-between gap-3">
        <Button className="rounded-full bg-forest text-white h-8 w-8 font-bold text-lg">
          -
        </Button>
        <span>{quantity}</span>
        <Button className="rounded-full bg-forest text-white h-8 w-8 font-bold text-lg">
          +
        </Button>
      </div>
    </div>
  );
};

export default CartProductCard;
