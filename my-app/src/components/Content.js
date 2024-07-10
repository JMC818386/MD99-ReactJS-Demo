// src/components/Content.js
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { apiGetDefaultFromMD99, apiGetDefaultFromLSI, apiGetPersonalFromNode, apiGetPersonalFromDjango } from './ApiClient';

const Content = () => {
  // const [classes, setClasses] = useState([]);
  // const [error, setError] = useState(null);
  // const [selectedStudent, setSelectedStudent] = useState(null);


  const handleBtn1 = (event) => {
    console.log("Btn 1 Clicked");

    apiGetDefaultFromLSI ((data) => {
      // process data later
    });
  };

  const handleBtn2 = (event) => {
    console.log("Btn 2 Clicked");

    apiGetDefaultFromMD99 ((data) => {
      // process data later
    });
  };

  const handleBtn3 = (event) => {
    console.log("Btn 3 Clicked");

    //const post_data = {user_name: "John"};
    const post_data = {student_id: 5};

    apiGetPersonalFromNode (post_data, (data) => {
      // process data later
    });
  };

  const handleBtn4 = (event) => {
    console.log("Btn 4 Clicked");

    //const post_data = {user_name: "Billy"};
    const post_data = {student_id: 5};

    apiGetPersonalFromDjango (post_data, (data) => {
      // process data later
    });
  };


  return (
    <div className="d-flex">
      <div className="div">
        <button onClick={handleBtn1}>&nbsp;LSI&nbsp;</button>
      </div>
      <div className="div">
        <button onClick={handleBtn2}>MD 99</button>
      </div>
      <div className="div">
        <button onClick={handleBtn3}>NODE</button>
      </div>  
      <div className="div">
        <button onClick={handleBtn4}>Django</button>
      </div>  
    </div>
  );
};

export default Content;
