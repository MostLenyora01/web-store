// src/redux/reducers/userReducer.js

// Initial state for the user, with an empty username and isLoggedIn set to false
const initialState = {
  username: "", // Username of the logged-in user
  isLoggedIn: false, // Boolean indicating whether the user is logged in or not
};

// Reducer function to handle actions related to user authentication
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    // Handle the action for logging in a user
    case "LOGIN_USER":
      return {
        ...state, // Keep the existing state
        username: action.payload, // Set the username from the action's payload
        isLoggedIn: true, // Set isLoggedIn to true, indicating the user is logged in
      };

    // Handle the action for logging out a user
    case "LOGOUT_USER":
      return {
        ...state, // Keep the existing state
        username: "", // Clear the username (set to empty string)
        isLoggedIn: false, // Set isLoggedIn to false, indicating the user is logged out
      };

    // Return the current state for all other actions
    default:
      return state;
  }
};

// Export the userReducer as the default export
export default userReducer;
