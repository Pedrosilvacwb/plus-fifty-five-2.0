import { useToast } from "../ui/use-toast";

import { ToastAction } from "../ui/toast";
import { addProductToCart } from "@/lib/actions/cart.action";

interface useProductCardProps {
  productId: number;
  userId: number;
}
const useProductCard = ({ productId, userId }: useProductCardProps) => {
  const { toast } = useToast();

  const addToCart = async () => {
    if (!userId) {
      return toast({
        title: "User Not Found",
        description: "Please log in to continue shopping.",
        variant: "destructive",
      });
    }

    await addProductToCart({ userId, productId });
    return toast({
      title: "Product Added to Cart",
      description: "You can open your cart to check your products.",
      variant: "default",
      color: "#4CAF50",
      duration: 5000,
    });
  };

  return {
    addToCart,
  };
};

export default useProductCard;
