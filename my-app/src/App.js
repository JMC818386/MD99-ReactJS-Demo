// src/App.js
import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className="app-container background-color">
      <Header />
      <Content />
    </div>
  );
};

export default App;
