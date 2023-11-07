import React from "react";
import { Link } from "react-router-dom";
import classes from "./NavBar.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { ThemeAction } from "../../../store/slice/theme.slice";
import { DegreeAction } from "../../../store/slice/degree.slice";

const NavBar = () => {
  const dispatch = useDispatch();
  const degree = useSelector((state: RootState) => state.degree.degree);
  const mode = useSelector((state: RootState) => state.theme.mode);

  return (
    <header className={classes.__navbar}>
      <div>
        <span>Sun-sational Forecast</span>
      </div>
      <div style={{ display: "flex", gap: "20px" }}>
        <span
          style={{ cursor: "pointer" }}
          onClick={() => dispatch(ThemeAction.changeTheme())}
        >
          Theme
        </span>
        <span
          style={{ cursor: "pointer" }}
          onClick={() => dispatch(DegreeAction.changeDegree())}
        >
          {degree === "C" ? (
            <>
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
          style={mode === "light" ? { color: "black" } : { color: "white" }}
          className={classes.__link__style}
          to={"weather"}
        >
          Main
        </Link>
        <Link
          style={mode === "light" ? { color: "black" } : { color: "white" }}
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
