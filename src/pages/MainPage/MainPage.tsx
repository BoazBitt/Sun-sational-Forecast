import React, { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import classes from "./MainPage.module.scss";
import FavoritesButton from "../../components/FavoritesButton/FavoritesButton";
import Forecast from "../../components/Forecast/Forecast";
import CurrentWeather from "../../components/CurrentWeather/CurrentWeather";
import { LocationData } from "../../utils/interfaces/location.interface";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import {
  getMyLocation,
} from "../../utils/actions/actions.api";
import { useLocation } from "react-router-dom";

export interface Props {
  city: LocationData;
}

const MainPage = () => {
  const { state } = useLocation();
  
  const mode = useSelector((state: RootState) => state.theme.mode);
  const [selectedCity, setSelectedCity] = useState<LocationData | null>(state ? state.city : null);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getMyLocation();
      setSelectedCity(data);
    }

    if(!state) fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.count(selectedCity?.Country.LocalizedName)

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={mode === "light" ? "dark" : "light"}
      />

      <SearchBar setSelectedCity={setSelectedCity} />
      {selectedCity && (
        <div className={classes.__mainpage}>
          <section className={classes.__section_one}>
            <CurrentWeather city={selectedCity} />
            <FavoritesButton city={selectedCity} />
          </section>
          <section className={classes.__section_two}>
            <Forecast city={selectedCity} />
          </section>
        </div>
      )}
    </>
  );
};

export default MainPage;
