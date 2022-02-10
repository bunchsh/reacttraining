import React from 'react';

import {Route, Link, Routes} from 'react-router-dom';

import GlobalStyle from "../src/assets/css/GlobalStyle"

import Index from './pages/Index';
// import Info1 from './pages/Info1';

const App = () => {
  return (
    <div>
      <GlobalStyle />
      
    <Routes>
     <Route path="/" element={<Index/>} exact={true}/>
    </Routes>
    </div>
  );
}

export default App;
