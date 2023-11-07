import React from 'react'
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai';
import { Props } from '../../pages/MainPage/MainPage';
import classes from './FavoritesButton.module.scss';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { FavoritesAction } from '../../store/slice/favorites.slice';
import { toast } from "react-toastify";

const FavoritesButton = ({city}:Props) => {
  const favorites = useSelector((state:RootState) => state.favorites.favorites);
  const isFavorite = favorites.some((place:any) => place.Key === city.Key);
  const dispatch = useDispatch();
  
  const handleFavorites = () => {
    if (isFavorite){
      dispatch(FavoritesAction.remove({location:city}))
      return toast.success("Removed from Favorites")


    }
    dispatch(FavoritesAction.add({location:city}))
    return toast.success("Added to Favorites")



  }
  
  return (
    <div className={classes.__buttons}>
        <Button variant='outlined' 
                style={{fontSize:"20px", cursor:"pointer"}}
                startIcon={isFavorite ? <AiFillHeart/> : <AiOutlineHeart/>} 
                color='inherit'
                onClick={handleFavorites}
                >
                  {isFavorite ? "Remove from favorites" : "Add to favorite"}
        </Button>
    </div>
  )
}

export default FavoritesButton