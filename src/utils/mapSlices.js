import { createSlice } from "@reduxjs/toolkit";
import { useState,useEffect } from "react";

const getLiveLocation =(callback)=>{
  
navigator.geolocation.getCurrentPosition(
      (data) => {
        console.log(data.coords);
        callback({lat:data.coords.longitude,lng:data.coords.latitude})
      },
      (e) => {
        console.log("Error to Find Locations");
      })

}

const mapSlice = createSlice({
  name: "map",
  initialState: {
    latlng: {
      lat: "26.7966564",
      lng: "75.8374058",
    },
  },
  reducers: {
    setLocation: (state, action) => {
      state.latlng = { ...action.payload };
    },
  },
});

getLiveLocation(mapSlice.actions.setLocation);

export const { setLocation } = mapSlice.actions;
export default mapSlice.reducer;
