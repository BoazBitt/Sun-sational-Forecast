import React from "react";
import classes from "./NavBar.module.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { ThemeAction, ThemeMode } from "../../../store/slice/theme.slice";
import { DegreeAction, Degrees } from "../../../store/slice/degree.slice";

const NavBar = () => {
  const dispatch = useDispatch();
  const currentDegree = useSelector((state: RootState) => state.degree.degree);
  const isCelsius: boolean = currentDegree === Degrees.Celsius;
  const { mode } = useSelector((state: RootState) => state.theme);

  return (
    <header className={classes.__navbar}>
      <div className={classes.__title}>
        <span>Sun-sational Forecast</span>
      </div>
      <div className={classes.__toggles}>
        <span onClick={() => dispatch(ThemeAction.changeTheme())}>
          {mode === ThemeMode.Light ? (
            <div>Switch to dark</div>
          ) : (
            <div>Switch to light</div>
          )}
        </span>
        <span onClick={() => dispatch(DegreeAction.changeDegree())}>
          {isCelsius ? (
            <>
              {" "}
              <span style={{ color: "red" }}>Metric</span> / Imperial
            </>
          ) : (
            <>
              Metric /<span style={{ color: "red" }}> Imperial</span>
            </>
          )}
        </span>
      </div>
      <div className={classes.__buttons}>
        <Link
          style={
            mode === ThemeMode.Light ? { color: "black" } : { color: "white" }
          }
          className={classes.__link__style}
          to={"weather"}
        >
          Main
        </Link>
        <Link
          style={
            mode === ThemeMode.Light ? { color: "black" } : { color: "white" }
          }
          className={classes.__link__style}
          to={"favorites"}
        >
          Favorites
        </Link>
      </div>
    </header>
  );
};

export default NavBar;
