import { createSlice } from '@reduxjs/toolkit'

type InitialState = {
    isDark: boolean
}

const initialState: InitialState = {
    isDark: true
}

const darkModeSlice = createSlice({
    name: 'darkmode',
    initialState,
    reducers: {
        changeMode: (state) => {
            state.isDark = !state.isDark;
        },
        setDarkMode: (state) => {
            state.isDark = true;
        },
        setLightMode: (state) => {
            state.isDark = false;
        }
    }
});

export default darkModeSlice.reducer;
export const { changeMode } = darkModeSlice.actions;
export const { setDarkMode } = darkModeSlice.actions;
export const { setLightMode } = darkModeSlice.actions;