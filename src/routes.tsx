import { Navigate, useRoutes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import MainPage from "./pages/MainPage/MainPage";
import Favorites from "./pages/Favorites/Favorites";

const Router = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        { element: <Navigate to="/weather" />, index: true },
        { path: "weather", element: <MainPage /> },
        { path: "favorites", element:<Favorites/>}
      ],
    },
    {
      path: "*",
      element: <Navigate to="/" replace />,
    },
  ]);

  return routes;
};

export default Router;
