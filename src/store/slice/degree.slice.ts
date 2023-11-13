import { createSlice } from "@reduxjs/toolkit";

export enum Degrees {
  Celsius,
  Fahrenheit,
}

interface DegreeState {
  degree: Degrees;
}

const initialDegreeState: DegreeState = {
  degree: Degrees.Celsius,
};

const DegreeSlice = createSlice({
  name: "degree",
  initialState: initialDegreeState,
  reducers: {
    changeDegree(state) {
      return {
        degree: state.degree === Degrees.Celsius ? Degrees.Fahrenheit : Degrees.Celsius,
      };
    },
  },
});

export const DegreeAction = DegreeSlice.actions;
export default DegreeSlice;
