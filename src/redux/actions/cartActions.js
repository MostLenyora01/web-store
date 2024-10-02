// src/redux/actions/cartActions.js

// Action to add a product to the cart
export const addToCart = (product) => {
  return {
    type: "ADD_TO_CART",
    payload: product,
  };
};

// Action to remove a product from the cart
export const removeFromCart = (id, price, quantity) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: { id, price, quantity },
  };
};
