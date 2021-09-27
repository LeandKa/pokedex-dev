import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Global from './Global';
import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <Global>
        <Routes />
      </Global>
    </BrowserRouter>
  );
}

export default App;
