// Models
import { Order, Product } from "./products";

export interface State {
  cart: Array<Product>;
  orders: Array<Order>;
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
  addToOrders: () => void;
  addToCart: (payload: Product) => void;
  removeFromCart: (payload: number) => void;
  setProduct: (payload: Product) => void;
}
