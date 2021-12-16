import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getAllTree } from './store/reducers/tree-slice';
import { getAllColor } from './store/reducers/color-slice';
import { getAllSection } from './store/reducers/section-slice';

import Main from './pages/Main';
import AuthLogin from './pages/AuthLogin';
import MyCart from './pages/MyCart';
import MyInfo from './pages/MyInfo';
import MyOrder from './pages/MyOrder';
import MyWithdrawal from './pages/MyWithdrawal';
import Pay from './pages/Pay';
import PrdList from './pages/PrdList';
import PrdView from './pages/PrdView';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTree());
    dispatch(getAllColor());
    dispatch(getAllSection());
  }, [dispatch]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<AuthLogin />} />
        <Route path="/cart" element={<MyCart />} />
        <Route path="/info" element={<MyInfo />} />
        <Route path="/order" element={<MyOrder />} />
        <Route path="/withdrawal" element={<MyWithdrawal />} />
        <Route path="/pay" element={<Pay />} />
        <Route path="/prd" element={<PrdList />} />
        <Route path="/prd/:id" element={<PrdView />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
