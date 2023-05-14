// Packages
import { useContext } from "react";

// Context
import { ShopppingCartContext } from "@context/index";

// Models
import { ContextItfz } from "@models/state";

const useStateContext = () => {
  const context: ContextItfz = useContext(ShopppingCartContext);
  return context;
};

export default useStateContext;
