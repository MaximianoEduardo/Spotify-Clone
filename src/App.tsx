import React, { useEffect, useState } from 'react';
import Landing from './page/landing/landing';
import { getTokenFromResponse } from './services/spotify';
import { filterTokenResponse } from './services/spotify';

function App() {

  const [token, setToken] = useState(null)


  // Run code base on given condition
  useEffect(() =>{

    const _token = filterTokenResponse()
    window.location.hash = ''

    if (_token){
      setToken(_token)
    }

  }, []);

  return (
    <div className="App">
      {
        token ? (
          <h1>Logado</h1>
        ) : (
          <Landing />
        )
      }
    </div>
  );
}

export default App;
