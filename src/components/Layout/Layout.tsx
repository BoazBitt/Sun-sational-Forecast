import React from "react";
import Container from "./Container/Container";
import NavBar from "./NavBar/NavBar";
import PageContent from "./PageContent/PageContent";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import classes from './Layout.module.scss';

interface ThemeStateProps {
  children:React.ReactNode
}
const ThemeState = ({children}:ThemeStateProps) => {
  const mode = useSelector((state:RootState) => state.theme.mode)

  return (
  <div className={ mode === 'light' ? classes.__light: classes.__dark}>
    {children}
  </div>
  )
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
