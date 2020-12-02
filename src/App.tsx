import React from 'react';

import GlobalStyles from './styles/globalStyles';
import Routes from './service/Routes/index';
import { BrowserRouter, } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes />
      <GlobalStyles />
    </BrowserRouter>
  );
};

export default App;
