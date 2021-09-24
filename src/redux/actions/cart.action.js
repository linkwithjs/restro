import CartActionsTypes from "./../constants/CartActionsTypes";
import { list } from "cart-localstorage";
import toastify from "./../../utils/toastify";
import { addItem, itemCount } from "./../../components/common/AddToCart";
const addToCart = (product) => (dispatch) => {
  const { id, name, price, quantity } = product;
  addItem(id, name, price, quantity);
  toastify("Product Added To Cart");
  dispatch({
    type: CartActionsTypes.ADD_CARTITEM,
    payload: true,
  });
};
// const removeFromCart = (product) => {};
const getCart = () => (dispatch) => {
  dispatch({ type: CartActionsTypes.GET_CARTITEM, payload: true });
  const cartItems = list();
  dispatch({
    type: CartActionsTypes.GET_CARTITEM_SUCCESS,
    payload: cartItems,
  });
  // setTimeout(() => {
  //   dispatch({
  //     type: CartActionsTypes.GET_CARTITEM_SUCCESS,
  //     payload: cartItems,
  //   });
  // }, 2000);
};

const countCartItem = () => (dispatch) => {
  dispatch({ type: CartActionsTypes.COUNT_CARTITEM, payload: true });
  const countItemsCart = itemCount();
  dispatch({
    type: CartActionsTypes.GET_CARTITEM_SUCCESS,
    payload: countItemsCart,
  });
  // setTimeout(() => {
  //   dispatch({
  //     type: CartActionsTypes.GET_CARTITEM_SUCCESS,
  //     payload: cartItems,
  //   });
  // }, 2000);
};

// const getUsers = (params) => (dispatch) => {
//   dispatch({ type: UserActionsTypes.GET_USER, payload: true });
//   axiosInstance
//     .get("/users")
//     .then((res) => {
//       dispatch({ type: UserActionTypes.GET_USER_SUCCESS, payload: res.data });
//     })
//     .catch((err) => {
//       dispatch({
//         type: UserActionTypes.GET_USER_FAILURE,
//         payload: err.message,
//       });
//     });
// };

// function addUser(user) {
//   return function (dispatch) {
//     dispatch({
//       type: UserActionsTypes.ADD_USER,
//       payload: user,
//     });
//   };
// }
// const exportedObject = {
//   getUsers,
//   addUser,
// };
export default getCart;
export { addToCart, countCartItem };
