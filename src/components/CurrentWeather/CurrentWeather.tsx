import React from "react";
import classes from "./CurrentWeather.module.scss";
import Degree from "../Degree/Degree";
import MyCard from "../MyCard/MyCard";
import { Props } from "../../pages/MainPage/MainPage";
import { getCurrentWeather } from "../../utils/actions/actions.api";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Degrees } from "../../store/slice/degree.slice";
import { iconInterface } from "../../utils/interfaces/icon.interface";
import {
  generateIcon,
  generateIconArgs,
} from "../../utils/functions/generateIcon";

const CurrentWeather = ({ location }: Props) => {
  const { data, isLoading } = useQuery({
    queryKey: ["current_weather", location.Key],
    queryFn: () => getCurrentWeather(location.Key, true),
  });

  const currentDegree = useSelector((state: RootState) => state.degree.degree);
  const isCelsius: boolean = currentDegree === Degrees.Celsius;

  if (isLoading) return <>Loading...</>;

  if (!data) return <>Error</>;

  const [currentWeather] = data;
  const { WeatherText, IsDayTime, Temperature } = currentWeather;
  const iconArgs: generateIconArgs = { WeatherText, IsDayTime };
  const weatherIcon: iconInterface | null = generateIcon(iconArgs);

  const degreeValue = isCelsius
    ? Temperature.Metric.Value
    : Temperature.Imperial.Value;

  return (
    <MyCard height="150px" width="250px" className={classes.__current_weather}>
      {weatherIcon && (
        <img
          src={weatherIcon.icon}
          alt="Weather Icon"
          className={classes.__weatherIcon}
        />
      )}
      <div className={classes.__info}>
        <span>{location.LocalizedName}</span>
        <Degree degree={degreeValue} />
      </div>
    </MyCard>
  );
};

export default CurrentWeather;
