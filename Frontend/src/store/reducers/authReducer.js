import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: false,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        setLoginAuth: (state, action) => {
            state.isAuthenticated = action.payload
        },
        setLogoutAuth: (state, action) => {
            state.isAuthenticated = action.payload
        }
    },
})
export const {
    loginAuth: setLoginAuth,
    logoutAuth: setLogoutAuth,
} = authSlice.actions;

export default authSlice.reducer;