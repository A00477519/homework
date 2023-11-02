import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import HomePage from './Pages/aboutMe';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AboutPage from './Pages/town';


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },

  {
    path: "/town",
    element: <AboutPage />,
  },
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='navigation'>
      <nav className='secB'>
        <br></br>
        <a style={{textDecoration: 'none', color: 'black', margin:'500px' }} href='/'>Home</a>
        <a style={{textDecoration: 'none', color: 'black', margin:'-450px'}} href='/town'>My Town</a>
    
      </nav>
    </div>
    
      <RouterProvider router={router} />
  </React.StrictMode>
);


reportWebVitals();
