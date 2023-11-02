import React from 'react';
import "../App.css";
import img from '../downtown.jpg.webp';
import WeatherComponent from '../weatherComponent';


function AboutPage() {
  return (
    <div className="App">

      <div className="town">
        <div className='text12'>
          <h1>
            I live in Halifax, Nova Scotia
          </h1>
          <p>
            Halifax, it's an Atlantic Ocean port in Eastern Canada, is the provincial capital of Nova Scotia. A major business centre, it's also known for its maritime history.
          </p>
          <div style={{display: 'flex'}}>
            <h4>The current weather condition is</h4>
            <WeatherComponent />
          </div>
          
          
        </div>

        <div className='loc'>
          <img src={img} alt="location" width="100%" />
        </div>

      </div>
      
    </div>
  );

  
  
}

export default AboutPage;
