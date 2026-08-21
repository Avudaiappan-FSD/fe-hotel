import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "../features/auth/registerslice";
import loginReducer from "../features/auth/loginslice";

const store = configureStore({
  reducer: {
    register: registerReducer,
    login: loginReducer
  },
  
});
export default store;