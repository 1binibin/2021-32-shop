import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

/** state *************/
const initialState = {
  selTree: '',
  allTree: [],
};

/** async action ******/
export const getAllTree = createAsyncThunk('tree/asyncTree', async () => {
  const url = process.env.REACT_APP_CATE_URL;
  const { data } = await axios.get(url);
  const tree = data[0].children.map((v) => {
    let children = v.children.map((v2) => ({ id: v2.id, title: v2.text }));
    return { id: v.id, title: v.text, children };
  });
  return tree;
});

/** reducer ***********/
export const treeSlice = createSlice({
  name: 'tree',
  initialState,
  reducers: {
    setTree: (state, { payload }) => {
      state.selTree = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllTree.fulfilled, (state, { payload }) => {
        // console.log('fulfilled', payload);
        state.allTree = payload;
      })
      .addCase(getAllTree.rejected, (state, { payload }) => {
        console.log('rejected', payload);
      });
  },
});

/** method ************/
export const { setTree } = treeSlice.actions;
export default treeSlice.reducer;
