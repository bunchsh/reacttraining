import React from 'react';

import {Route, Link, Routes} from 'react-router-dom';

import ComponentHeader from './fixed/ComponentHeader';
import ComponentFooter from './fixed/ComponentFooter';

const App = () => {
  return (
    <div>
      <div className="header"><ComponentHeader/></div>
      <div className="footer"><ComponentFooter/></div>
      
    <Routes>
      <Route element={<ComponentHeader/>}/>
      <Route element={<ComponentFooter/>}/>
    </Routes>
    </div>
  );
}

export default App;
