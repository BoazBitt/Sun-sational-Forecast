import { createSlice } from "@reduxjs/toolkit";
import { LocationData } from "../../utils/interfaces/location.interface";

interface Favorites {
  favorites: LocationData[];
}

const initialFavoritesState: Favorites = {
  favorites: [],
};

const FavoritesSlice = createSlice({
  name: "Favorites",
  initialState: initialFavoritesState,
  reducers: {
    add(state, actions) {
      const { location }: {location:LocationData} = actions.payload;
      state.favorites.push(location);
      return state;
    },
    remove(state, actions) {
      const { location }: {location:LocationData} = actions.payload;
      const newFavorites = state.favorites.filter(
        (place) => place.Key !== location.Key
      );
      return { favorites: newFavorites };
    },
  },
});

export const FavoritesAction = FavoritesSlice.actions;
export default FavoritesSlice;
