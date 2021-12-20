import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

/** state *************/
const initialState = {
  selColor: '',
  allColor: [],
};

/** async action ******/
export const getAllColor = createAsyncThunk('color/asyncColor', async () => {
  const url = process.env.REACT_APP_COLOR_URL;
  const { data } = await axios.get(url);
  return data;
});

/** reducer ***********/
export const colorSlice = createSlice({
  name: 'color',
  initialState,
  reducers: {
    setColor: (state, { payload }) => {
      state.selColor = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllColor.fulfilled, (state, { payload }) => {
        state.allColor = payload;
      })
      .addCase(getAllColor.rejected, (state, { payload }) => {
        console.log('rejected', payload);
      });
  },
});

/** method ************/
export const { setColor } = colorSlice.actions;
export default colorSlice.reducer;
