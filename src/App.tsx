import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import DetailProduct from './pages/DetailProduct';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path='/product/:id' element={<DetailProduct />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
