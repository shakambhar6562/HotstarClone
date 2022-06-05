import { createSlice } from "@reduxjs/toolkit";
import { Action } from "history";

const initialState ={
    name:"",
    email: "",
    photo: ""
}
const userSlice=createSlice({
    name:"user",
    initialState,
    reducers: {
        setUserLogin: (state,action) =>{
        state.name=action.payload.name;
        state.email=action.payload.email;
        state.photo=action.payload.photo;

        },
        setSignout: (state) => {
            state.name=null;
            state.email=null;
            state.photo=null;
        }
    }
})

export const {setUserLogin,setSignout}=userSlice.actions;

export const selectUserName=(state) => state.user.name;

export const selectUseremail=(state) => state.user.email;

export const selectUserphoto=(state) => state.user.photo;

export default userSlice.reducer;