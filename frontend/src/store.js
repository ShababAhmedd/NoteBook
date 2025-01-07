import { configureStore } from "@reduxjs/toolkit";
import { userLoginReducer, userRegisterReducer } from "./reducers/userReducers";

// Combine reducers
const reducer = {
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
};

// Get user info from localStorage
const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

// Set initial state
const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

// Configure store
const store = configureStore({
  reducer,
  preloadedState: initialState,
  devTools: process.env.NODE_ENV !== "production", // Enable Redux DevTools in non-production environments
});

export default store;
