import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Redirect, Route, } from 'react-router-dom';
import CommamdsPage from './pages/commands';
import FeaturePage from './pages/features';
import { initReactI18next } from "react-i18next"
import i18n from "i18next"
import en from "./components/data/resources/en"
import fr from "./components/data/resources/fr"
import ar from './components/data/resources/ar';
import Login from './pages/login';
import Dashboard from './dashboard';
var langType = localStorage.getItem("lang")
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en
      },
      fr: {
        translation: fr
      },
      ar: {
        translation: ar
      }
    },
    lng: langType,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });
const isAuth = localStorage.getItem("access_token")
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
    <Route path='/login' >
      <Login />
    </Route>
    <Route path="/dashboard">
      {
        isAuth ? 
        <Dashboard /> :
        <Redirect to='/login'/>
      }
      
    </Route>
  </Router>

);

