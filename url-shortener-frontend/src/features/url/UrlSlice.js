import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axiosInstance";

export const shortenUrl = createAsyncThunk("", async (originalUrl) => {
  const response = await axiosInstance.post("v1/urls/shorten", { originalUrl });
  return response.data;
});

const urlSlice = createSlice({
  name: "url",
  initialState: {
    originalUrl: "",
    shortenedUrl: "",
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(shortenUrl.pending, (state) => {
        state.status = "loading";
      })
      .addCase(shortenUrl.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.shortenedUrl = action.payload.shortUrl;
      })
      .addCase(shortenUrl.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default urlSlice.reducer;
