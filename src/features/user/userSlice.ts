import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface User {
    username: string
}

const initialState: User = {
    username: ""
} 

export const userSlice = createSlice({
    name: 'userslice',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.username = action.payload
        }
    }
})

export const {setUser} = userSlice.actions
export const selectUser = (state: RootState) => state.user.username // first assign the reducer or combine the reducer in the store otherwise is not gonna work

export default userSlice.reducer