import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const Degree = ({
  degree,
  className,
}: {
  degree: number;
  className?: string;
}) => {
  const deg = useSelector((state: RootState) => state.degree.degree);

  return (
    <span className={className}>
      {degree}
      {deg === "C" ? <span>&#8451;</span> : <span>&#x2109;</span>}
    </span>
  );
};

export default Degree;
