import { createSlice } from '@reduxjs/toolkit';

const userslice = createSlice({
    name: 'userrole',
    initialState: null,
    reducers: {
        setUser: (state, action) => action.payload,
        clearuser: () => null
    },
});

export const { setUser, clearuser } = userslice.actions;
export const selectUser = (state) => state.userrole;
export default userslice.reducer;