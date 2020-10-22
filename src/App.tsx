import React from 'react';

import Login from './pages/login/';
import SigUp from './pages/signUp/';
import GlobalStyles from './styles/globalStyles';

const App: React.FC = () => {
  return (
    <>
      <Login />
      <GlobalStyles />
    </>
  );
};

export default App;
