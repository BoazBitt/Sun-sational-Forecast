import { Card } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { ThemeMode } from "../../store/slice/theme.slice";
interface MyCardProps {
  children: React.ReactNode;
  width: string;
  height: string;
  className?: string;
}

const MyCard = ({ children, className, width, height }: MyCardProps) => {
  const { mode } = useSelector((state: RootState) => state.theme);

  return (
    <Card
      className={className}
      style={{
        width,
        height,
        borderRadius: "20px",
        background: mode === ThemeMode.Light ? "white" : "rgb(5, 50, 70)",
        color: mode === ThemeMode.Light ? "black" : "white",
      }}
    >
      {children}
    </Card>
  );
};

export default MyCard;
