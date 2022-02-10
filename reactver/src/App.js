import React from 'react';

import {Route, Link, Routes} from 'react-router-dom';

import ComponentHeader from './fixed/ComponentHeader';
import ComponentFooter from './fixed/ComponentFooter';

const App = () => {
  return (
    <div>
      <h1><ComponentHeader/></h1>
      <h1><ComponentFooter/></h1>
      
    <Routes>
      <Route path='/header' element={<ComponentHeader/>}/>
      <Route path='/footer' element={<ComponentFooter/>}/>
    </Routes>
    </div>
  );
}

export default App;
