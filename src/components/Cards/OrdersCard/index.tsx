import { ChevronRightIcon } from "@heroicons/react/24/solid";

interface OrdersCardProps {
  totalPrice: number;
  totalProducts: number;
}

const OrdersCard = ({ totalPrice, totalProducts }: OrdersCardProps) => {
  return (
    <div className='flex justify-between items-center border border-black rounded-lg p-4 w-80 mb-4'>
      <div className='flex justify-between items-center w-full'>
        <p className='flex flex-col'>
          <span className='font-light'>01.02.23</span>
          <span>{totalProducts} articles</span>
        </p>
        <p className='flex items-center'>
          <span className='font-medium text-xl'>${totalPrice}</span>
          <ChevronRightIcon className='h-5 w-5 text-gray-300' />
        </p>
      </div>
    </div>
  );
};

export default OrdersCard;
