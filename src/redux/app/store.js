import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "../features/auth/registerslice";
import loginReducer from "../features/auth/loginslice";
import userReducer from "../features/auth/userslice";
import roomReducer from "../features/auth/roomslice";

const store = configureStore({
  reducer: {
    register: registerReducer,
    login: loginReducer,
    user: userReducer,
    room: roomReducer,
  },

});
export default store;