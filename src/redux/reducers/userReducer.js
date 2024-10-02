// src/redux/reducers/userReducer.js

const initialState = {
  username: "",
  isLoggedIn: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return { ...state, username: action.payload, isLoggedIn: true };
    case "LOGOUT_USER":
      return { ...state, username: "", isLoggedIn: false };
    default:
      return state;
  }
};

export default userReducer;
