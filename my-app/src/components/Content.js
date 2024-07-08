// src/components/Content.js
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import '../App.css';

const Content = () => {
  // const [classes, setClasses] = useState([]);
  // const [error, setError] = useState(null);
  // const [selectedStudent, setSelectedStudent] = useState(null);

  const handleBtn1 = (event) => {
    console.log("Btn 1 Clicked");
  };

  const handleBtn2 = (event) => {
    console.log("Btn 2 Clicked");
  };

  const handleBtn3 = (event) => {
    console.log("Btn 3 Clicked");
  };

  return (
    <div className="d-flex">
      <div className="div">
        <button onClick={handleBtn1}>Button 1</button>
      </div>
      <div className="div">
        <button onClick={handleBtn2}>Button 2</button>
      </div>
      <div className="div">
        <button onClick={handleBtn3}>Button 3</button>
      </div>  
    </div>
  );
};

export default Content;
