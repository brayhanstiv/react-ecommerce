// Packages
import { createContext } from "react";

// Hooks
import useInitialState from "@hooks/useInitialState";

// Models
import { ContextItfz } from "@models/state";

interface shoppingProviderProps {
  children: string | JSX.Element | JSX.Element[];
}

export const ShopppingCartContext = createContext<ContextItfz>(null!);

const ShoppingCartProvider = ({ children }: shoppingProviderProps) => {
  const initialState: ContextItfz = useInitialState();

  return (
    <ShopppingCartContext.Provider value={initialState}>
      {children}
    </ShopppingCartContext.Provider>
  );
};

export default ShoppingCartProvider;
