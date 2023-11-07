import React from "react";
import { Props } from "../../pages/MainPage/MainPage";
import { getForecast } from "../../utils/actions/actions.api";
import Day from "./Day/Day";
import classes from "./Forecast.module.scss";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
const Forecast = ({ city }: Props) => {
  const deg = useSelector((state: RootState) => state.degree.degree);
  console.count('for')
  const {data, isLoading} = useQuery({ queryKey: ['forecast',deg,city.Key], queryFn: ()=> {
    if(deg==='C') return getForecast(city.Key, true, true)
    else return getForecast(city.Key, true)
  }})
  
  if (isLoading) return <>Loading...</>;

  return (
    <div className={classes.__forecast}>
      <div className={classes.__details}>
        <h1>{data.Headline.Category}</h1>
        <p>{data.Headline.Text}</p>
      </div>
      <div className={classes.__cards}>
        {data.DailyForecasts.map((day: any, index: number) => {
          return <Day day={day} key={index} IsDayTime={data.Headline.IsDayTime} />;
        })}
      </div>
    </div>
  );
};

export default Forecast;
