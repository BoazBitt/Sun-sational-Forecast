import { Card } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
interface MyCardProps {
  children: React.ReactNode;
  width: string;
  height: string;
  className?: string;
}

const MyCard = ({
  children,
  className,
  width,
  height,
}: MyCardProps) => {

  const mode = useSelector((state: RootState) => state.theme.mode);

  return (
      <Card
        className={className}
        style={{
          width,
          height,
          borderRadius: "20px",
          background: mode === "light" ? "white" : "rgb(5, 50, 70)",
          color: mode === "light" ? "black" : "white",
        }}
      >
        {children}
      </Card>
  );
};

export default MyCard;
