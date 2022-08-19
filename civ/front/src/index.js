import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'

import App from './App';
import Header from './pages/header'
import Footer from './pages/footer'

import './css/bootstrap.css'
import './css/estilos.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header/>
      <main className="container text-center">
        <App />
      </main>
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>
);
