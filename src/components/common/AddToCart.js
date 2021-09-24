import { add, list, remove, total } from "cart-localstorage";
import toastify from "./../../utils/toastify";

// function to add cart in localStorage
const addItem = (id, name, price, quantity) => {
  const cartdata = {
    id: id,
    name: name,
    price: price,
  };

  // add to localStorage
  add(cartdata, quantity);
};

// function for cart item count
const itemCount = () => {
  const cartItems = list();
  const cartCount = cartItems.length;
  return cartCount;
};

//function for total amount

const totalAmount = () => {
  return total();
};

// function to remove cart item

const removeItem = (id) => {
  remove(id);
  toastify("Product removed successfully");
};

export { addItem, itemCount, totalAmount, removeItem };
