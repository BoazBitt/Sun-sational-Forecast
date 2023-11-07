// import React from "react";
// import { render, screen, fireEvent } from "@testing-library/react";
// import { Provider } from "react-redux"; 
// import NavBar from "../components/Layout/NavBar/NavBar";
// import store from "../../../store/store"; 
// import { useSelector , useDispatch } from "react-redux/es/hooks/useSelector";

// jest.mock("react-redux", () => ({
//   useDispatch: jest.fn(),
//   useSelector: jest.fn(),
// }));

// describe("NavBar Component", () => {
//   beforeEach(() => {
//     jest.clearAllMocks();
//   });

//   it("renders NavBar component correctly", () => {
//     useSelector.mockReturnValue({
//       degree: "C",
//       mode: "light",
//     });

//     render(
//       <Provider store={store}>
//         <NavBar />
//       </Provider>
//     );

//     expect(screen.getByText("Sun-sational Forecast")).toBeInTheDocument();
//     expect(screen.getByText("Theme")).toBeInTheDocument();
//     expect(screen.getByText("Main")).toBeInTheDocument();
//     expect(screen.getByText("Favorites")).toBeInTheDocument();
//   });

//   it("dispatches ThemeAction when 'Theme' is clicked", () => {
//     const mockDispatch = jest.fn();
//     useDispatch.mockReturnValue(mockDispatch);

//     render(
//       <Provider store={store}>
//         <NavBar />
//       </Provider>
//     );

//     const themeButton = screen.getByText("Theme");
//     fireEvent.click(themeButton);

//     expect(mockDispatch).toHaveBeenCalledWith(expect.any(Function));
//   });

//   it("dispatches DegreeAction when 'Metric / Imperial' is clicked", () => {
//     const mockDispatch = jest.fn();
//     useDispatch.mockReturnValue(mockDispatch);
//     useSelector.mockReturnValue({
//       degree: "C",
//       mode: "light",
//     });

//     render(
//       <Provider store={store}>
//         <NavBar />
//       </Provider>
//     );

//     const degreeButton = screen.getByText("Metric / Imperial");
//     fireEvent.click(degreeButton);

//     // Check if the DegreeAction was dispatched
//     expect(mockDispatch).toHaveBeenCalledWith(expect.any(Function));
//   });

//   // You can add more test cases as needed
// });
