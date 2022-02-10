import React from 'react';

import {Route, Link, Routes} from 'react-router-dom';

import ComponentFooter from './fixed/ComponentFooter';

const App = () => {
  return (
    <div>
      
    <Routes>
      <Route path='/footer' element={<ComponentFooter/>}/>
    </Routes>
    </div>
  );
}

export default App;
