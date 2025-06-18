// user and token will set up here locally

import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";
export type TUser = {
userId:string, 
role: string,
 iat: number, 
 exp: number
}
type TAuthState = {
    user: null | TUser;
    token: null | string
}

const initialState :TAuthState = {
    user: null,  //by default they will be null
    token: null 
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            const {user, token} = action.payload;
            state.user = user;
            state.token = token
        },
        logOut: (state) => {
            state.user = null;
            state.token = null;
        }
    }
});

export const {setUser, logOut} = authSlice.actions;

export default authSlice.reducer;

//use the state parameter because Redux selectors always work on the entire Redux store, and you 
// need to drill into your slice (auth) to return just the piece of data you want (token or user).
export const useCurrentToken = (state: RootState) => state.auth.token;
export const useCurrentUser = (state: RootState) => state.auth.user