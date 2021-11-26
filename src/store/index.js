import { configureStore } from '@reduxjs/toolkit';

import treeSlice from './reducers/tree-slice';

const testMiddleware = () => (next) => (action) => {
  console.log('====== Test Middleware =====');
  next(action);
};

export const store = configureStore({
  reducer: {
    tree: treeSlice,
  },
  middleware: (def) => def().concat(testMiddleware),
  devTools: process.env.NODE_ENV !== 'production',
});
