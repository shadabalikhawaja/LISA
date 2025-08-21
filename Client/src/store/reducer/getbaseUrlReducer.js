import { createSlice } from "@reduxjs/toolkit";

const getbaseUrlReducer = createSlice({
  name: "baseUrl",
  initialState: { url: "https://protect-app-backend.coursex.us" },
});

// https://protect-app-backend.coursex.us
// http://localhost:5001
//
// http://localhost:5002

export default getbaseUrlReducer;
