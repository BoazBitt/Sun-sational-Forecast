import React from "react";
import { Day as DayType } from "./day.interface";
import classes from "./Day.module.scss";
import Degree from "../../Degree/Degree";
import { iconInterface } from "../../../utils/interfaces/icon.interface";
import MyCard from "../../MyCard/MyCard";
import getIcon from "../../../assets/icons/Icons";
const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const Day = ({ day, IsDayTime }: { day: DayType; IsDayTime: boolean }) => {
  let weatherIcon: iconInterface | null = null;

  if (IsDayTime) weatherIcon = getIcon(day.Day.IconPhrase, true);
  else weatherIcon = getIcon(day.Night.IconPhrase, false);

  return (
    <MyCard className={classes.__day} width="180px" height="180px">
      <div>
        {/* <Sunny width="90px" height="100px" /> */}
        {weatherIcon && (
            <img
              src={weatherIcon.icon}
              alt=""
              style={{ width: "100px", height: "70px" }}
            />
          )}
      </div>
      <span>{dayNames[new Date(day.Date).getDay()]}</span>
      <Degree degree={day.Temperature.Maximum.Value} />
    </MyCard>
  );
};

export default Day;
