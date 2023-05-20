// Packages
import { Link, useParams } from "react-router-dom";

// Components
import { MainLayout, OrderCard } from "@components/index";

// Icons
import { ChevronLeftIcon } from "@heroicons/react/24/solid";

// Hooks
import useStateContext from "@hooks/useStateContext";

// Models
import { Product } from "@models/products";

const MyOrderPage = () => {
  const {
    state: { orders },
  } = useStateContext();

  const { id } = useParams();
  let products;

  if (id) {
    products = orders[parseInt(id)].products;
  } else {
    products = orders.slice(-1)[0].products;
  }
  return (
    <MainLayout>
      <div className='flex flex-col justify-center items-center'>
        <div className='flex items-center justify-center relative w-80 mb-4'>
          <Link to='/my-orders' className='absolute left-0'>
            <ChevronLeftIcon className='h-6 w-6 text-black cursor-pointer' />
          </Link>
          <h1 className='font-medium text-2xl'>My Order</h1>
        </div>
        <div className='flex flex-col w-80'>
          {products.length > 0
            ? products.map((product: Product) => (
                <OrderCard key={product.id} product={product} order={true} />
              ))
            : "No products found"}
        </div>
      </div>
    </MainLayout>
  );
};

export default MyOrderPage;
