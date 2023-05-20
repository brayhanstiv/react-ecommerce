// Context
import useStateContext from "@hooks/useStateContext";

//Icons
import { CheckIcon, PlusIcon } from "@heroicons/react/24/solid";

// Models
import { Product } from "@models/products";
import { MouseEvent } from "react";

interface props {
  product: Product;
}

const ProductCard = ({ product }: props) => {
  const {
    state: { cart },
    addToCart,
    setProduct,
  } = useStateContext();
  const addedToCart = cart.find((item) => item.id === product.id);

  const handleAddToCart = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (!addedToCart) {
      addToCart(product);
    }
  };

  return (
    <div
      className='bg-white cursor-pointer w-56 h-60 rounded-lg'
      onClick={() => setProduct(product)}
    >
      <figure className='relative mb-2 w-full h-4/5'>
        <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>
          {product.category.name}
        </span>
        <img
          className='w-full h-full object-cover rounded-lg'
          src={product.images[0]}
          alt={product.title}
        />
        <div
          className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'
          onClick={handleAddToCart}
        >
          {addedToCart ? (
            <CheckIcon className='w-6 h-6' />
          ) : (
            <PlusIcon className='w-6 h-6' />
          )}
        </div>
      </figure>
      <p className='flex justify-between'>
        <span className='text-sm font-light'>{product.title}</span>
        <span className='text-lg font-medium'>${product.price}</span>
      </p>
    </div>
  );
};

export default ProductCard;
