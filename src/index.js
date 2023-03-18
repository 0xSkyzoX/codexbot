import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import CommamdsPage from './pages/commands';
import FeaturePage from './pages/features';
import { initReactI18next } from "react-i18next"
import i18n from "i18next"
import en from ".//components/data/resources/en.json"
import fr from "./components/data/resources/fr.json"
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
      }
    },
    lng: langType,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

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

