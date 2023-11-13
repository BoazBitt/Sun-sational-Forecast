import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Degrees } from "../../store/slice/degree.slice";

const Degree = ({
  degree,
  className,
}: {
  degree: number;
  className?: string;
}) => {
  const currentDegree = useSelector((state: RootState) => state.degree.degree);
  const isCelsius:boolean = currentDegree === Degrees.Celsius;
  return (
    <span className={className}>
      {degree}
      {isCelsius ? <span>&#8451;</span> : <span>&#x2109;</span>}
    </span>
  );
};

export default Degree;
