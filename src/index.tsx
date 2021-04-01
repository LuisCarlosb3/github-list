import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Repository } from './pages/Repositories';
import { UserPage } from './pages/UserPage'


ReactDOM.render(
  <React.StrictMode>
    <UserPage />
  </React.StrictMode>,
  document.getElementById('root')
);
