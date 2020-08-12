import React, { useEffect, useState } from 'react';
import Landing from './page/landing/landing';
import { getTokenFromResponse } from './services/spotify';

function App() {

  // Run code base on given condition
  useEffect(() =>{

    const [token, setToken] = useState(null)

    const hash = getTokenFromResponse()
    window.location.hash = ''
    
    // const accessToken = hash.accessToken

    // if (accessToken){
    //   setToken(token)
    // }

  }, []);

  return (
    <div className="App">
      <Landing />
    </div>
  );
}

export default App;
