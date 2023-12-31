import { createSlice } from "@reduxjs/toolkit";

const darkModeSlice = createSlice({
    name: 'darkMode',
    initialState: {
        status: false,
    },
    reducers: {
        toggleDarkMode: state => {
            state.status = !state.status
        }
    }
})

export const {toggleDarkMode} = darkModeSlice.actions
export default darkModeSlice.reducer