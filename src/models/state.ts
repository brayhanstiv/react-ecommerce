// Models
import { Order, Product } from "./products";

export interface State {
  cart: Array<Product>;
  items: Array<Product>;
  filteredItems: Array<Product>;
  orders: Array<Order>;
  product: Product;
  search: string;
  menu: boolean;
  dropdown: boolean;
  shopping: boolean;
  detail: boolean;
}

export interface ContextItfz {
  state: State;
  setItems: (payload: Product[]) => void;
  setFilteredItems: (payload: Product[]) => void;
  toggleMenu: () => void;
  toggleDropdown: () => void;
  toggleShopping: () => void;
  closeDetail: () => void;
  addToOrders: () => void;
  addToCart: (payload: Product) => void;
  removeFromCart: (payload: number) => void;
  setProduct: (payload: Product) => void;
  setSearch: (payload: string) => void;
}
