import React from 'react';

import {Route, Routes} from 'react-router-dom';

import GlobalStyle from "../src/assets/css/GlobalStyle"

import ComponentHeader from './fixed/ComponentHeader';
import ComponentFooter from './fixed/ComponentFooter';
import Index from './pages/Index';
import Info1 from './pages/Info1';

import Info2 from './pages/Info2';

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <div className="header"><ComponentHeader/></div>
      
      <Routes>
      <Route path="/" element={<Index/>}/>
      <Route path="/info1" element={<Info1/>}/>
      <Route path="/info2" element={<Info2/>}/>
      </Routes>
      
      <div className="footer"><ComponentFooter/></div>
    </div>
  );
}

export default App;
