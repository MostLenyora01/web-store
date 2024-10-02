// src/redux/store.js
import { createStore, combineReducers } from "redux";
import cartReducer from "./reducers/cartReducer"; // Importing cartReducer
import userReducer from "./reducers/userReducer"; // Importing userReducer

// Combine the reducers into one rootReducer
const rootReducer = combineReducers({
  cart: cartReducer, // Handles cart state
  user: userReducer, // Handles user state (login, register, etc.)
});

// Create the Redux store with the rootReducer
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // Enable Redux DevTools
);

export default store;
