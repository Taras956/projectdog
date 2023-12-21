// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MyAcc from './components/MyAcc';
import CreateAccount from './components/CreateAccount';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MyAcc />} />
        <Route path="/create-account" element={<CreateAccount />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;