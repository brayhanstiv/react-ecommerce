// Packages
import { useEffect } from "react";
import { useParams } from "react-router-dom";

// Components
import { MainLayout, ProductCard, ProductDetail } from "@components/index";

// Hooks
import useStateContext from "@hooks/useStateContext";

// Models
import { Product } from "@models/products";

const HomePage = () => {
  const {
    state: { search, detail, items, filteredItems },
    setSearch,
    setItems,
    setFilteredItems,
  } = useStateContext();

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getData(`https://api.escuelajs.co/api/v1/products/?categoryId=${id}`);
    } else {
      getData("https://api.escuelajs.co/api/v1/products");
    }
  }, [id]);

  useEffect(() => {
    const data = items.filter((item) => {
      return item.title.toLowerCase().includes(search.toLowerCase());
    });
    setFilteredItems(data);
  }, [search]);

  const getData = (url: string) => {
    fetch(url)
      .then((response) => response.json())
      .then((data: Product[]) => setItems(data));
  };

  const renderView = (list: Product[]) => {
    return list.map((item: Product) => (
      <ProductCard key={item.id} product={item} />
    ));
  };

  return (
    <MainLayout>
      <div className='flex items-center justify-center relative w-80 mb-4'>
        <h1 className='font-medium text-2xl'>Exclusive products</h1>
      </div>
      <input
        type='text'
        placeholder='Search a product'
        className='rounded-lg border border-black w-80 p-4 mb-4'
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className='grid grid-cols-4 gap-4 w-full max-w-screen-lg'>
        {search.length > 0
          ? filteredItems.length > 0
            ? renderView(filteredItems)
            : "There are no data"
          : renderView(items)}
      </div>
      <>{detail && <ProductDetail />}</>
    </MainLayout>
  );
};

export default HomePage;
