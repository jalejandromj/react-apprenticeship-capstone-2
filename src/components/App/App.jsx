import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from '../Layout';
import HomePage from '../../pages/Home';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route exact path="/" element={<HomePage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
