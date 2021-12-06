import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

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
