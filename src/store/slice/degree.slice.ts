import { createSlice } from "@reduxjs/toolkit";

interface Degree {
    degree: 'C' | 'F';
}

const initialDegreeState: Degree = {
    degree:"C",
};

const DegreeSlice = createSlice({
  name: "degree",
  initialState: initialDegreeState,
  reducers: {
    changeDegree(state) {
      if(state.degree ===  "C") return {degree: "F"}
      return {degree:"C"}
    },
  },
});

export const DegreeAction = DegreeSlice.actions;
export default DegreeSlice;