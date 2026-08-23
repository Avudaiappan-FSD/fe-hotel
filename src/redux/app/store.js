import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "../features/auth/registerslice";
import loginReducer from "../features/auth/loginslice";
import  userReducer  from "../features/auth/userslice";


const store = configureStore({
  reducer: {
    register: registerReducer,
    login: loginReducer,
    userrole: userReducer,
  },
  
});
export default store;