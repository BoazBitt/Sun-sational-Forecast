import React from "react";
import { Props } from "../../pages/MainPage/MainPage";
import { getCurrentWeather } from "../../utils/actions/actions.api";
// import { ReactComponent as Sunny } from "../../assets/icons/yellow-sun-16526.svg";
import classes from "./CurrentWeather.module.scss";
import Degree from "../Degree/Degree";
import MyCard from "../MyCard/MyCard";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";


import { iconInterface } from "../../utils/interfaces/icon.interface";
import getIcon from "../../assets/icons/Icons";

const CurrentWeather = ({ city }: Props) => {
  let weatherIcon: iconInterface | null = null;
  //eslint-disable-next-line
  const { data, isLoading } = useQuery({
    queryKey: ["current_weather", city.Key],
    queryFn: () => getCurrentWeather(city.Key, true),
  });

  const deg = useSelector((state: RootState) => state.degree.degree);

  if (isLoading) return <>Loading...</>;

  if (!data) return <>Error...</>;
  if (data[0].WeatherText)weatherIcon = getIcon(data[0].WeatherText, data[0].IsDayTime);

  return (
    
      <MyCard
        height="150px"
        width="250px"
        className={classes.__current_weather}
      >
        <div>
          {weatherIcon && (
            <img
              src={weatherIcon.icon}
              alt=""
              style={{ width: "100px", height: "70px" }}
            />
          )}
        </div>
        <div className={classes.__info}>
          <span>{city.LocalizedName}</span>
          {deg === "C" ? (
            <Degree degree={data[0].Temperature.Metric.Value} />
          ) : (
            <Degree degree={data[0].Temperature.Imperial.Value} />
          )}
        </div>
      </MyCard>
  );
};

export default CurrentWeather;
