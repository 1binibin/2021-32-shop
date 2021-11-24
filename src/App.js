import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Main from './pages/Main';
import AuthLogin from './pages/AuthLogin';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<AuthLogin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
