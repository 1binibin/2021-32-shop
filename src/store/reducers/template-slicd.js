import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

/** state *************/
const state = {};

/** async action ******/
export const 비동기액션 = createAsyncThunk('네임/액션명', async (매개변수) => {
  const { data } = await axios.get('URL', { 매개변수 });
  // data 가공
  return data;
});

/** reducer ***********/
export const 슬라이스네임 = createSlice({
  name: '네임',
  state,
  reducers: {
    동기액션: () => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(비동기액션.pending, (state, action) => {})
      .addCase(비동기액션.fulfilled, (state, action) => {})
      .addCase(비동기액션.rejected, (state, action) => {});
  },
});

/** method ************/
export const 사용자함수 = (state) => state.data;
export const { 동기액션 } = 슬라이스네임.actions;
export default 슬라이스네임.reducer;

// import { 동기액션, 비동기액션, 사용자함수 } from '슬라이스';
