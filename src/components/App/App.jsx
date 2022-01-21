import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from '../Layout';
import HomePage from '../../pages/Home';
//import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Layout >
        <Routes>
          <Route exact path="/" element={<HomePage />}></Route>
        </Routes>
      </Layout >
    </BrowserRouter>
  );
}

export default App;
