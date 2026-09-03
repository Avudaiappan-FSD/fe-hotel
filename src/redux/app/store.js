import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "../features/auth/registerslice";
import loginReducer from "../features/auth/loginslice";
import userReducer from "../features/auth/userslice";
// import { updateprofileReducer } from "../features/auth/updateprofileslice";


const store = configureStore({
  reducer: {
    register: registerReducer,
    login: loginReducer,
    user: userReducer,
    // updateprofile: updateprofileReducer,
  },

});
export default store;