import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: false,
}

export const blogSlice = createSlice({
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
} = blogSlice.actions;

export default blogSlice.reducer;