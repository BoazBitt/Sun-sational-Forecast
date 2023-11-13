import React from "react";
import classes from "./Day.module.scss";
import Degree from "../../Degree/Degree";
import MyCard from "../../MyCard/MyCard";
import getIcon from "../../../assets/icons/Icons";
import { Day as DayType } from "./day.interface";
import { iconInterface } from "../../../utils/interfaces/icon.interface";
enum DAYS_OF_WEEK {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

const Day = ({ day, IsDayTime }: { day: DayType; IsDayTime: boolean }) => {
  let weatherIcon: iconInterface | null = null;

  if (IsDayTime) weatherIcon = getIcon(day.Day.IconPhrase, true);
  else weatherIcon = getIcon(day.Night.IconPhrase, false);

  return (
    <MyCard className={classes.__day} width="180px" height="180px">
      <div>
        {weatherIcon && (
          <img
            src={weatherIcon.icon}
            alt="Weather Icon"
            className={classes.__weatherIcon}
          />
        )}
      </div>
      <span>{DAYS_OF_WEEK[new Date(day.Date).getDay()]}</span>
      <Degree degree={day.Temperature.Maximum.Value} />
    </MyCard>
  );
};

export default Day;
