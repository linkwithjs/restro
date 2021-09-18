import CartActionsTypes from "./../constants/CartActionsTypes";

const addToCart = (product) => {};
const removeFromCart = (product) => {};
const getCart = () => (dispatch) => {
  dispatch({ type: CartActionsTypes.GET_CARTITEM, payload: true });
  setTimeout(() => {
    var cartItems = localStorage.getItem("__cart");
    dispatch({
      type: CartActionsTypes.GET_CARTITEM_SUCCESS,
      payload: cartItems,
    });
  }, 5000);
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
