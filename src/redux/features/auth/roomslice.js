import { createSlice } from '@reduxjs/toolkit';
export const roomslice = createSlice({
    name: 'room',
    initialState: {
        form: {
            roomnumber: "",
            roomtype: "",
            price: "",
            capacity: "",
            description: "",
            location: ""
        }
    },
    reducers: {
        setroomnumber: (state, action) => {
            state.form.roomnumber = action.payload;
        },
        setroomtype: (state, action) => {
            state.form.roomtype = action.payload;
        },
        setprice: (state, action) => {
            state.form.price = action.payload;
        },
        setcapacity: (state, action) => {
            state.form.capacity = action.payload;
        },
        setdescription: (state, action) => {
            state.form.description = action.payload;
        },
        setlocation: (state, action) => {
            state.form.location = action.payload;
        }
    }
})
export const { setroomnumber, setroomtype, setprice, setcapacity, setdescription, setlocation } = roomslice.actions;
export const selectroomnumber = (state) => state.room.form.roomnumber;
export const selectroomtype = (state) => state.room.form.roomtype;
export const selectprice = (state) => state.room.form.price;
export const selectcapactiy = (state) => state.room.form.capacity;
export const selectdescription = (state) => state.room.form.description;
export const selectlocation = (state) => state.room.form.location;
export default roomslice.reducer;