import React from "react";
import classes from "./Forecast.module.scss";
import Day from "./Day/Day";
import { Day as DayType } from "./Day/day.interface";
import { Props } from "../../pages/MainPage/MainPage";
import { getForecast } from "../../utils/actions/actions.api";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Degrees } from "../../store/slice/degree.slice";

const Forecast = ({ location }: Props) => {
  const currentDegree = useSelector((state: RootState) => state.degree.degree);
  const isCelsius: boolean = currentDegree === Degrees.Celsius;

  const degree = useSelector((state: RootState) => state.degree.degree);
  const { data, isLoading } = useQuery({
    queryKey: ["forecast", location.Key, degree],
    queryFn: () => getForecast(location.Key, true, isCelsius),
  });

  if (isLoading) return <>Loading...</>;

  return (
    <div className={classes.__forecast}>
      <div className={classes.__details}>
        <h1>{data.Headline.Category}</h1>
        <p>{data.Headline.Text}</p>
      </div>
      <div className={classes.__cards}>
        {data.DailyForecasts.map((day: DayType) => {
          return (
            <Day
              day={day}
              key={day.EpochDate}
              IsDayTime={data.Headline.IsDayTime}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Forecast;
