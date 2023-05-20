// Models
import { Product } from "@/models/products";

/**
 * This function is used to calculate the total number of prices for a list of products
 * @param {Product[]} products array of products
 * @returns {number} total prices
 */
export const totalPrice = (products: Product[]) => {
  return products.reduce((total, product) => {
    return total + product.price;
  }, 0);
};
