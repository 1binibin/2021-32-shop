import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

/** state *************/
const state = {
  selTree: '',
  allTree: [],
};

/** async action ******/
export const getAllTree = createAsyncThunk('tree/asyncTree', async (매개변수) => {
  const url = 'http://127.0.0.1:3100/api/tree';
  const { data } = await axios.get(url);
  const tree = data[0].children.map((v) => {
    let children = v.children.map((v2) => ({ id: v2.id, title: v2.text }));
    return { id: v.id, title: v.text, children };
  });
  // data 가공
  return tree;
});

/** reducer ***********/
export const treeSlice = createSlice({
  name: 'tree',
  state,
  reducers: {
    setTree: (state, { payload }) => {
      state.selTree = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllTree.fulfilled, (state, { payload }) => {
        // 리턴값 tree 19번줄
        state.allTree = payload;
      })
      .addCase(getAllTree.rejected, (state, { payload }) => {
        console.log(payload);
      });
  },
});

/** method ************/
export const { setTree } = treeSlice.actions;
export default treeSlice.reducer;
