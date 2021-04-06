import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './hooks/useUser';
import './index.css';
import { Routes } from './routers/routes'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <Routes />
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
