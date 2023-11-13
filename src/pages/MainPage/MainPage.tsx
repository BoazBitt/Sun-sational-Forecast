import React, { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import classes from "./MainPage.module.scss";
import FavoritesButton from "../../components/FavoritesButton/FavoritesButton";
import Forecast from "../../components/Forecast/Forecast";
import CurrentWeather from "../../components/CurrentWeather/CurrentWeather";
import MyToastContainer from "../../components/Layout/MyToastContainer/MyToastContainer";
import { LocationData } from "../../utils/interfaces/location.interface";
import { getMyLocation } from "../../utils/actions/actions.api";
import { useLocation } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

export interface Props {
  location: LocationData;
}

const MainPage = () => {
  const { state } = useLocation();
  const [selectedLocation, setLocation] = useState<LocationData | null>(
    state?.location ?? null
  );

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMyLocation();
      setLocation(data);
    };

    if (!state) fetchData();
  }, [state]);

  const handleSearch = (newLocation: LocationData) => {
    setLocation(newLocation);
  };

  return (
    <>
      <MyToastContainer />
      <SearchBar handleSearch={handleSearch} />
      {selectedLocation && (
        <div className={classes.__mainpage}>
          <section className={classes.__section_one}>
            <CurrentWeather location={selectedLocation} />
            <FavoritesButton location={selectedLocation} />
          </section>
          <section className={classes.__section_two}>
            <Forecast location={selectedLocation} />
          </section>
        </div>
      )}
    </>
  );
};

export default MainPage;
