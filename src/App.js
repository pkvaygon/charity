import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Content from './Components/Content/Content';
import Employees from './Components/Employees/Employees';
const App = () => {
  return (
    <div>
      {/* <Content /> */}
      <Routes>
        <Route path='/' element={<Content />} />
        <Route path={'/employees'} element={<Employees />} />
      </Routes>
    </div>

  );

};

export default App;