import React from 'react';

import {Route, Link, Routes} from 'react-router-dom';

import GlobalStyle from "../src/assets/css/GlobalStyle"
import indexStyle from "../src/assets/css/index.module.css"

import ComponentHeader from './fixed/ComponentHeader';
import ComponentFooter from './fixed/ComponentFooter';
import Main from './fixed/main';

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <div className="header"><ComponentHeader/></div>
      
      <Routes>
      <Route path="/main" element={<Main/>}/>
      </Routes>
      
      <div className="footer"><ComponentFooter/></div>

    </div>
  );
}

export default App;
