import { configureStore } from "@reduxjs/toolkit";
import ThemeSlice from "./slice/theme.slice";
import FavoritesSlice from "./slice/favorites.slice";
import DegreeSlice from "./slice/degree.slice";


export const saveSliceToLocalStorage = (sliceName: string, sliceState: any) => {
  try {
    const serialisedState = JSON.stringify(sliceState);
    localStorage.setItem(`${sliceName}`, serialisedState);
  } catch (e) {
    console.warn(e);
  }
};

// load string from localStarage and convert into an Object
// invalid output must be undefined
export const loadSliceFromLocalStorage = (sliceName: string) => {
  try {
    const serialisedState = localStorage.getItem(`${sliceName}`);
    if (serialisedState === null) return undefined;
    return JSON.parse(serialisedState);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
};

const themeStorage = loadSliceFromLocalStorage("theme");
const favoritesStorage = loadSliceFromLocalStorage("favorites");
const degreeStorage = loadSliceFromLocalStorage("degree");



const store = configureStore({
  reducer: {
    'theme': ThemeSlice.reducer,
    'favorites':FavoritesSlice.reducer,
    'degree':DegreeSlice.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
    preloadedState: { 
      theme: themeStorage,
      favorites: favoritesStorage, 
      degree: degreeStorage,
    },
});

store.subscribe(() => {
  const { theme, favorites,degree } = store.getState();
  saveSliceToLocalStorage("theme", theme);
  saveSliceToLocalStorage("favorites", favorites);
  saveSliceToLocalStorage("degree", degree);
});


export type RootState = ReturnType<typeof store.getState>;
export default store;
