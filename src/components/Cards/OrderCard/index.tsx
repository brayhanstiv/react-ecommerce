// Icons
import { XMarkIcon } from "@heroicons/react/24/solid";

// Hooks
import useStateContext from "@hooks/useStateContext";

// Models
import { Product } from "@models/products";

interface OrderCardProps {
  product: Product;
  order?: boolean;
}

const OrderCard = ({ product, order = false }: OrderCardProps) => {
  const { removeFromCart } = useStateContext();

  return (
    <div className='flex justify-between items-center py-1'>
      <div className='flex items-center gap-2'>
        <figure className='w-20 h-20'>
          <img
            className='w-full h-full rounded-lg object-cover'
            src={product.images[0]}
            alt={product.title}
          />
        </figure>
        <p className='text-sm font-light'>{product.title}</p>
      </div>

      <div className='flex items-center gap-2'>
        <p className='text-lg font-medium'>{product.price}</p>
        {!order && (
          <XMarkIcon
            onClick={() => removeFromCart(product.id)}
            className='h-6 w-6 text-gray-400 cursor-pointer'
          />
        )}
      </div>
    </div>
  );
};

export default OrderCard;
