import { createSlice } from '@reduxjs/toolkit';

const userslice = createSlice({
    name: 'user',
    initialState: null,
    reducers: {
        setUser: (state, action) => action.payload,
        clearuser: () => null
    },
});

export const { setUser, clearuser } = userslice.actions;
export const selectUser = (state) => state.user;
export default userslice.reducer;