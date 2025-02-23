// src/store/slices/imageSlice.js
import { createSlice } from '@reduxjs/toolkit';
import Example from "../../assets/images/example.png"
import Example2 from "../../assets/images/example2.png"
import Example3 from "../../assets/images/example3.png"

const initialState = {
  images: [
    { id: 1, url: Example },
    { id: 2, url: Example2 },
    { id: 3, url: Example3 }
  ]
};

const imageSlice = createSlice({
  name: "images",
  initialState,
  reducers: {}
});

export const selectImages = (state) => state.images.images;
export default imageSlice.reducer;
