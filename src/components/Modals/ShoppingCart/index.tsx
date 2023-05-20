// Components
import OrderCard from "@components/Cards/OrderCard";

// Icons
import { XMarkIcon } from "@heroicons/react/24/solid";

// Hooks
import useStateContext from "@hooks/useStateContext";

// Models
import { Product } from "@models/products";

// Styles
import "./index.css";

// Utils
import { totalPrice } from "@utils/functions";
import { Link } from "react-router-dom";

const ShoppingCart = () => {
  const {
    state: { cart },
    toggleShopping,
    addToOrders,
  } = useStateContext();

  const total = totalPrice(cart);

  return (
    <aside className='shopping-cart flex flex-col justify-between fixed right-0 border border-black rounded-lg bg-white p-6'>
      <div>
        <div className='flex justify-between items-center '>
          <h2 className='font-medium text-xl'>Cart</h2>
          <div onClick={toggleShopping}>
            <XMarkIcon className='h-6 w-6 text-black cursor-pointer' />
          </div>
        </div>
        <div className='mt-4 overflow-y-auto'>
          {cart.map((product: Product) => (
            <OrderCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <div>
        <p className='flex justify-between items-center'>
          <span className='font-light '>Total: </span>
          <span className='font-medium text-2xl'>${total}</span>
        </p>
        <Link to='/my-order'>
          <button
            className='bg-black py-3 text-white w-full rounded-lg'
            onClick={addToOrders}
          >
            Checkout
          </button>
        </Link>
      </div>
    </aside>
  );
};

export default ShoppingCart;
