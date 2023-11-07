import { Grid } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import CurrentWeather from "../../components/CurrentWeather/CurrentWeather";
import {  useNavigate } from "react-router-dom";
import { LocationData } from "../../utils/interfaces/location.interface";

const Favorites = () => {
  const navigate = useNavigate();

  const favorites = useSelector(
    (state: RootState) => state.favorites.favorites
  );
  const handleClick = (city:LocationData) => {
    navigate("/weather", { state: { city } });
  };
  return (
    <Grid container display={"flex"} justifyContent={"center"} rowGap={5}>
      {favorites.map((favorite, index) => {
        return (
          <Grid
            item
            xs={0}
            sm={3}
            lg={0}
            display={"flex"}
            flexDirection={"column"}
            position={"relative"}
            alignItems={"center"}
            justifyContent={"center"}
            style={{ cursor: "pointer" }}
            key={`favorite_${index}`}
            onClick={()=>handleClick(favorite)}
          >
            <CurrentWeather city={favorite} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Favorites;
