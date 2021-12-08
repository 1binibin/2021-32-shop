import { configureStore } from '@reduxjs/toolkit';

import treeSlice from './reducers/tree-slice';
import colorSlice from './reducers/color-slice';
import sectionSlice from './reducers/section-slice';

const testMiddleware = () => (next) => (action) => {
  // console.log('===== Test Middleware =====');
  next(action);
};

export const store = configureStore({
  reducer: {
    tree: treeSlice,
    color: colorSlice,
    section: sectionSlice,
  },
  middleware: (def) => def().concat(testMiddleware),
  devTools: process.env.NODE_ENV !== 'production',
});
