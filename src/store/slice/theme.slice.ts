import { createSlice } from "@reduxjs/toolkit";

interface Theme {
    mode: 'light' | 'dark';
}

const initialThemeState: Theme = {
  mode:"light",
};

const ThemeSlice = createSlice({
  name: "theme",
  initialState: initialThemeState,
  reducers: {
    changeTheme(state) {
      if(state.mode ===  "light") return {mode: "dark"}
      return {mode:"light"}
    },
  },
});

export const ThemeAction = ThemeSlice.actions;
export default ThemeSlice;