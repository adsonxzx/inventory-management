import React from 'react';
import './assets/styles/style.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import Header from './components/Header';
import Siderbar from './components/Siderbar';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Siderbar />
      <div className="main-container">
        <main className="main-content">
          <Routes />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
