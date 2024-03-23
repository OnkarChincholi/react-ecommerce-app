import React from 'react';
import { useLocation } from 'react-router-dom';

function Default() {
  const location = useLocation();

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-10 mx-auto text-center text-title text-Uppercase pt-5'>
          <h1 className='display-3'>404</h1>
          <h1>ERROR!</h1>
          <h2>Page Not Found</h2>
          <h3>
            The requested URL <span className='text-danger'>{location.pathname}</span> was not found
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Default;
