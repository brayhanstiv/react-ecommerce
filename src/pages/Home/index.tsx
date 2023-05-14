// Packages
import { useState, useEffect } from "react";

// Components
import { MainLayout, ProductCard, ProductDetail } from "@components/index";

// Hooks
import useStateContext from "@hooks/useStateContext";

// Models
import { Product } from "@models/products";

const HomePage = () => {
  const [items, setItems] = useState<Array<Product>>([]);
  const {
    state: { detail },
  } = useStateContext();

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((data: Array<Product>) => setItems(data));
  }, []);

  return (
    <MainLayout>
      <div className='grid grid-cols-4 gap-4 w-full max-w-screen-lg'>
        {items.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
      <>{detail && <ProductDetail />}</>
    </MainLayout>
  );
};

export default HomePage;
