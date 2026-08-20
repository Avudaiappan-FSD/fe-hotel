import { createSlice } from '@reduxjs/toolkit';

export const registerslice = createSlice({
  name: 'register',
  initialState: {
    form:{
        name: '',
        email: '',
        password: '',
    }
},
reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
  },
});

export const { setName, setEmail, setPassword } = registerslice.actions;
export const selectName = (state) => state.register.name;
export const selectEmail = (state) => state.register.email;
export const selectPassword = (state) => state.register.password;
export default registerslice.reducer;