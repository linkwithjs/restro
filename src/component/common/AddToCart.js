import { add, list, total } from "cart-localstorage";

// function to add cart in localStorage
const addItem = (id, name, price, quantity) => {
  const cartdata = {
    id: id,
    name: name,
    price: price,
  };

  // add to localStorage
  add(cartdata, quantity);

  alert("Cart added successfully.");
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

export { addItem, itemCount, totalAmount };
