import React from "react";
import classes from "./FavoritesButton.module.scss";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { Props } from "../../pages/MainPage/MainPage";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { FavoritesAction } from "../../store/slice/favorites.slice";
import { toast } from "react-toastify";
import { LocationData } from "../../utils/interfaces/location.interface";

const FavoritesButton = ({ location }: Props) => {
  const handleFavorites = () => {
    const message: string = isFavorite
      ? "Removed from Favorites"
      : "Added to Favorites";
    const action = isFavorite ? FavoritesAction.remove : FavoritesAction.add;
    dispatch(action({ location: location }));
    toast.success(message);
  };
  const favorites = useSelector(
    (state: RootState) => state.favorites.favorites
  );
  const dispatch = useDispatch();

  const isFavorite = favorites.find(
    (place: LocationData) => place.Key === location.Key
  );

  const icon = isFavorite ? <AiFillHeart /> : <AiOutlineHeart />;

  const text = isFavorite ? "Remove from favorites" : "Add to favorite";

  return (
    <div className={classes.__buttons}>
      <Button
        className={classes.__button}
        variant="outlined"
        startIcon={icon}
        color="inherit"
        onClick={handleFavorites}
      >
        {text}
      </Button>
    </div>
  );
};

export default FavoritesButton;
