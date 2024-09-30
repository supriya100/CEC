import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './Components/Signup/Signup';
import Login from './Components/Login/login';
import Dashboard from './Components/Dashboard/dashboard'
function App() {
  return (
    <Router>
    <Routes>
      {/* Define routes */}
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </Router>
  );
}

export default App;
