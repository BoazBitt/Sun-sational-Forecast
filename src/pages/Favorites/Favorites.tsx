import React from "react";
import CurrentWeather from "../../components/CurrentWeather/CurrentWeather";
import { useSelector } from "react-redux";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../store/store";
import { LocationData } from "../../utils/interfaces/location.interface";

const Favorites = () => {
  const navigate = useNavigate();

  const favorites = useSelector(
    (state: RootState) => state.favorites.favorites
  );

  const handleClick = (location: LocationData) => {
    navigate("weather", { state: { location } });
  };

  return (
    <Grid container display="flex" justifyContent="center" rowGap={5}>
      {favorites.map((favorite) => (
        <Grid
          item
          xs={0}
          sm={3}
          lg={0}
          flexDirection="column"
          position="relative"
          alignItems="center"
          justifyContent="center"
          style={{ cursor: "pointer" }}
          key={`favorite_${favorite.Key}`}
          onClick={() => handleClick(favorite)}
        >
          <CurrentWeather location={favorite} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Favorites;
