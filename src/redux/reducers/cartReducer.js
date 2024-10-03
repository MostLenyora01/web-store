// src/redux/reducers/cartReducer.js

// Initial state for the cart, with an empty items array and a total of 0
const initialState = {
  items: [], // Array to hold the items in the cart
  total: 0, // Total price of the items in the cart
};

// Reducer function to handle actions related to the cart
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    // Handle the action for adding an item to the cart
    case "ADD_TO_CART":
      return {
        ...state, // Keep the existing state
        items: [...state.items, action.payload], // Add the new item (action.payload) to the items array
        total: state.total + action.payload.price, // Update the total by adding the price of the new item
      };

    // Handle the action for removing an item from the cart
    case "REMOVE_FROM_CART":
      return {
        ...state, // Keep the existing state
        items: state.items.filter((item) => item.id !== action.payload.id), // Filter out the item that matches the ID from action.payload
        total: state.total - action.payload.price, // Subtract the price of the removed item from the total
      };

    // Return the current state for all other actions
    default:
      return state;
  }
};

// Export the cartReducer as the default export
export default cartReducer;
