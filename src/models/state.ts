// Models
import { Product } from "./products";

export interface State {
  cart: Array<Product>;
  product: Product;
  menu: boolean;
  dropdown: boolean;
  shopping: boolean;
  detail: boolean;
}

export interface ContextItfz {
  state: State;
  toggleMenu: () => void;
  toggleDropdown: () => void;
  toggleShopping: () => void;
  closeDetail: () => void;
  addToCart: (payload: Product) => void;
  removeFromCart: (payload: number) => void;
  setProduct: (payload: Product) => void;
}
