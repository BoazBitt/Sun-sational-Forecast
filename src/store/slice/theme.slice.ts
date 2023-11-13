import { createSlice } from "@reduxjs/toolkit";

export enum ThemeMode {
  Light,
  Dark,
}

interface ThemeState {
  mode: ThemeMode;
}

const initialThemeState: ThemeState = {
  mode: ThemeMode.Light,
};

const ThemeSlice = createSlice({
  name: "theme",
  initialState: initialThemeState,
  reducers: {
    changeTheme(state) {
      return {
        mode: state.mode === ThemeMode.Light ? ThemeMode.Dark : ThemeMode.Light,
      };
    },
  },
});

export const ThemeAction = ThemeSlice.actions;
export default ThemeSlice;
