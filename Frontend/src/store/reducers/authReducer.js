import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: false,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        setLoginAuth: (state) => {
            state.isLoggedIn = true;
        },
        setLogoutAuth: (state) => {
            state.isLoggedIn = false;
        }
    },
})
export const {
    setLoginAuth: loginAuthAction,
    setLogoutAuth: logoutAuthAction,
} = authSlice.actions;

export default authSlice.reducer;