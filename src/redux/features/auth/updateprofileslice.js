import { createSlice } from "@reduxjs/toolkit";


export const updateprofileslice = createSlice({
    name: 'updateprofile',
    initialState: {
        name: "",
        email: ""
    },
    reducers: {
        setName: (state, action) => {
            state.name = action.payload;
        },
        setEmail: (state, action) => {
            state.email = action.payload;
        },
    },
});

export const { setName, setEmail } = updateprofileslice.actions;
export const selectName = (state) => state.updateprofile.name;
export const selectEmail = (state) => state.updateprofile.email;
export default updateprofileslice.reducer