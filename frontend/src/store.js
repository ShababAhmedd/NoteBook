import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk"; // Change from default import to named import
import { composeWithDevTools } from "redux-devtools-extension";
import { userLoginReducer } from "./reducers/userReducers";

// Combine your reducers (leave it empty if you don't have reducers yet)
const reducer = combineReducers({
  userLogin: userLoginReducer,
});

const initialState = {};

// Define middleware
const middleware = [thunk];

// Check if window.__REDUX_DEVTOOLS_EXTENSION__ is available and apply it if necessary
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create the store, using composeEnhancers with applyMiddleware
const store = createStore(
  reducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleware)) // Correct usage of composeEnhancers
);

export default store;
