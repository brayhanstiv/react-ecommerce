// Packages
import { useReducer } from "react";

// Models
import { State } from "@models/state";
import { Product } from "@models/products";

// Actions
import { totalPrice } from "@utils/functions";

const initialState: State = {
  cart: [],
  product: <Product>{},
  orders: [],
  menu: false,
  dropdown: false,
  shopping: false,
  detail: false,
};

enum dataTypes {
  TOGGLE_MENU = "TOGGLE_MENU",
  TOGGLE_DROPDOWN = "TOGGLE_DROPDOWN",
  TOGGLE_SHOPPING = "TOGGLE_SHOPPING",
  CLOSE_DETAIL = "CLOSE_DETAIL",
  ADD_TO_CART = "ADD_TO_CART",
  REMOVE_FROM_CART = "REMOVE_FROM_CART",
  ADD_TO_ORDERS = "ADD_TO_ORDERS",
  SET_PRODUCT = "SET_PRODUCT",
}

interface dataAction {
  type: dataTypes;
  payload?: any;
}

const reducer = (state: State, action: dataAction) => {
  switch (action.type) {
    case dataTypes.TOGGLE_MENU:
      return {
        ...state,
        menu: !state.menu,
        dropdown: false,
        shopping: false,
        detail: false,
      };
    case dataTypes.TOGGLE_DROPDOWN:
      return {
        ...state,
        dropdown: !state.dropdown,
        menu: false,
        shopping: false,
        detail: false,
      };
    case dataTypes.TOGGLE_SHOPPING:
      return {
        ...state,
        shopping: !state.shopping,
        menu: false,
        dropdown: false,
        detail: false,
      };
    case dataTypes.CLOSE_DETAIL:
      return {
        ...state,
        detail: false,
        shopping: false,
        menu: false,
        dropdown: false,
      };
    case dataTypes.ADD_TO_ORDERS:
      return {
        ...state,
        cart: [],
        orders: [
          ...state.orders,
          {
            date: "01.02.23",
            products: state.cart,
            totalProducts: state.cart.length,
            totalPrice: totalPrice(state.cart),
          },
        ],
      };
    case dataTypes.ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
        detail: false,
        shopping: false,
        menu: false,
        dropdown: false,
      };
    case dataTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
        detail: false,
        shopping: true,
        menu: false,
        dropdown: false,
      };
    case dataTypes.SET_PRODUCT:
      return {
        ...state,
        product: action.payload,
        detail: true,
        shopping: false,
        menu: false,
        dropdown: false,
      };
    default:
      throw new Error();
  }
};

const useInitialState = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleMenu = () => dispatch({ type: dataTypes.TOGGLE_MENU });
  const toggleDropdown = () => dispatch({ type: dataTypes.TOGGLE_DROPDOWN });
  const toggleShopping = () => dispatch({ type: dataTypes.TOGGLE_SHOPPING });
  const closeDetail = () => dispatch({ type: dataTypes.CLOSE_DETAIL });
  const addToOrders = () => dispatch({ type: dataTypes.ADD_TO_ORDERS });
  const addToCart = (payload: Product) =>
    dispatch({ type: dataTypes.ADD_TO_CART, payload: payload });
  const removeFromCart = (payload: number) =>
    dispatch({ type: dataTypes.REMOVE_FROM_CART, payload: payload });
  const setProduct = (payload: Product) =>
    dispatch({ type: dataTypes.SET_PRODUCT, payload: payload });
  return {
    state,
    toggleMenu,
    toggleDropdown,
    toggleShopping,
    closeDetail,
    addToOrders,
    addToCart,
    removeFromCart,
    setProduct,
  };
};

export default useInitialState;
