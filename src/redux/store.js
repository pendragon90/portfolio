import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "./slices/darkMode";

const store = configureStore({
    reducer: {
        darkMode: darkModeReducer
    }
})

export default store