// Hooks
import useStateContext from "@hooks/useStateContext";

//Icons
import { XMarkIcon } from "@heroicons/react/24/solid";

//Styles
import "./index.css";

const ProductDetail = () => {
  const {
    state: { product },
    closeDetail,
  } = useStateContext();

  return (
    <aside className='product-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white p-6'>
      <div className='flex justify-between items-center '>
        <h2 className='font-medium text-xl'>Detail</h2>
        <XMarkIcon
          className='h-6 w-6 cursor-pointer'
          onClick={() => closeDetail()}
        />
      </div>
      <figure className='mt-6'>
        <img
          className='rounded-lg'
          src={product.images[0]}
          alt={product.title}
        />
      </figure>
      <p className='flex flex-col mt-6'>
        <span className='font-medium text-2xl text-green-600'>
          ${product.price}
        </span>
        <span className='font-medium text-md'>{product.title}</span>
        <span className='font-light text-sm'>{product.description}</span>
      </p>
      <p className='flex justify-between items-center mt-4'>
        <span className='font-medium text-xl'>Category</span>
        <span className='font-medium text-sm text-green-600'>
          {product.category.name}
        </span>
      </p>
    </aside>
  );
};

export default ProductDetail;
