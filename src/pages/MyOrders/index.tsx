// Packages
import { Link } from "react-router-dom";

// Components
import { MainLayout, OrdersCard } from "@components/index";

// Hooks
import useStateContext from "@hooks/useStateContext";

// Models
import { Order } from "@models/products";

const MyOrdersPage = () => {
  const {
    state: { orders },
  } = useStateContext();
  return (
    <MainLayout>
      <div className='flex items-center justify-center relative w-80 mb-4'>
        <h1 className='font-medium text-2xl'>My Orders</h1>
      </div>
      <div>
        {orders.map((order: Order, index: number) => (
          <Link key={index} to={`/my-orders/${index}`}>
            <OrdersCard
              totalPrice={order.totalPrice}
              totalProducts={order.totalProducts}
            />
          </Link>
        ))}
      </div>
    </MainLayout>
  );
};

export default MyOrdersPage;
