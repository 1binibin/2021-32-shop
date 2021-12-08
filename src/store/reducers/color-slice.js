import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

/** state *************/
const initialState = {
  selColor: '',
  allColor: [],
};

/** async action ******/
export const getAllColor = createAsyncThunk('color/asyncColor', async (매개변수) => {
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
        // 리턴값 tree 19번줄
        state.allColor = payload;
      })
      .addCase(getAllColor.rejected, (state, { payload }) => {
        console.log('reject', payload);
        console.log(payload);
      });
  },
});

/** method ************/
export const { setColor } = colorSlice.actions;
export default colorSlice.reducer;
