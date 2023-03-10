import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CommamdsPage from './pages/commands';
import ErrorPage from './pages/errorPage/error';
import FeaturePage from './pages/features';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route exact index element={<App />} />
      <Route path='/commands' element={<CommamdsPage />} />
      <Route path='/commands/build'></Route>
      <Route path='*' element={<ErrorPage />}/>
      <Route path='/features' element={<FeaturePage />}/>
    </Routes>
  </BrowserRouter>
);

