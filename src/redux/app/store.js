import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "../features/auth/registerslice";
import loginReducer from "../features/auth/loginslice";
import  userroleReducer  from "../features/auth/userslice";


const store = configureStore({
  reducer: {
    register: registerReducer,
    login: loginReducer,
    userrole: userroleReducer,
  },
  
});
export default store;