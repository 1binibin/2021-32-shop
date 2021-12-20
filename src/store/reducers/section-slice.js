import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

/** state *************/
const initialState = {
  selSection: '',
  allSection: [],
};

/** async action ******/
export const getAllSection = createAsyncThunk('section/asyncSection', async () => {
  const url = process.env.REACT_APP_SECTION_URL;
  const { data } = await axios.get(url);
  return data;
});

/** reducer ***********/
export const sectionSlice = createSlice({
  name: 'section',
  initialState,
  reducers: {
    setSection: (state, { payload }) => {
      state.selSection = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllSection.fulfilled, (state, { payload }) => {
        state.allSection = payload;
      })
      .addCase(getAllSection.rejected, (state, { payload }) => {
        console.log('rejected', payload);
      });
  },
});

/** method ************/
export const { setSection } = sectionSlice.actions;
export default sectionSlice.reducer;
