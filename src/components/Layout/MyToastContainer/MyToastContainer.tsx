import React from "react";
import { ToastContainer } from "react-toastify";
import { ThemeMode } from "../../../store/slice/theme.slice";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

const MyToastContainer = () => {
  const { mode } = useSelector((state: RootState) => state.theme);

  return (
    <ToastContainer
      position="top-center"
      autoClose={1500}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme={mode === ThemeMode.Dark ? "light" : "dark"}
    />
  );
};

export default MyToastContainer;
