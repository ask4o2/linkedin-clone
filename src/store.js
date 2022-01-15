// // new synthax
// import { configureStore } from "@reduxjs/toolkit";
// import userReducer from "./redux/userSlice";

// export default configureStore({
//   reducer: {
//     user: userReducer,
//   },
// });

import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducer";

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
