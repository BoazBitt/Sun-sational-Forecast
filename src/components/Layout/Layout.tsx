import React from "react";
import classes from "./Layout.module.scss";
import Container from "./Container/Container";
import NavBar from "./NavBar/NavBar";
import PageContent from "./PageContent/PageContent";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { ThemeMode } from "../../store/slice/theme.slice";

interface ThemeStateProps {
  children: React.ReactNode;
}
const ThemeState = ({ children }: ThemeStateProps) => {
  const { mode } = useSelector((state: RootState) => state.theme);

  return (
    <div
      className={mode === ThemeMode.Light ? classes.__light : classes.__dark}
    >
      {children}
    </div>
  );
};

const Layout = () => {
  return (
    <ThemeState>
      <Container>
        <NavBar />
        <PageContent>
          <Outlet />
        </PageContent>
      </Container>
    </ThemeState>
  );
};

export default Layout;
