import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import Header from '../header';

const index = () => {
    return (
      <div>
       <Header />
        <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route />
          <Route />
          <Route />
        </Routes>
        </main>
      </div>
    );
  };
  export default index;