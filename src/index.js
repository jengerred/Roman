import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/Styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CardsProvider } from '../src/Components/CardsContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <CardsProvider>
      <App />
      </CardsProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();