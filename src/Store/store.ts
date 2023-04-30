import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "../Features/DarkMode/DarkModeSlice"

export const store = configureStore({
    reducer: {
        darkmode: darkModeReducer
    }
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;