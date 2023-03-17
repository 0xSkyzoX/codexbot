import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Redirect, Route, Switch  } from 'react-router-dom';
import CommamdsPage from './pages/commands';
import ErrorPage from './pages/errorPage/error';
import FeaturePage from './pages/features';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
      
        <Route exact path="/">
          <App />
        </Route>
      <Route path='/commands'  >
        <CommamdsPage />
      </Route>
      <Route path='/features' >
        <FeaturePage />
        </Route>
    </Router>

);

