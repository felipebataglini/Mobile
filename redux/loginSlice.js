import { createSlice } from "@reduxjs/toolkit";

const initialValues = {
    user: null,
}

export const loginSlice = createSlice({
    name: 'login',
    initialState: initialValues,
    reducers: {
        reducerSetLogin: (state, action) => {
            state.user = action.payload
        },
        reducerSetLogout: (state) => {
            state.user = null
        }
    }
})

export const { reducerSetLogin, reducerSetLogout } = loginSlice.actions

export default loginSlice.reducer