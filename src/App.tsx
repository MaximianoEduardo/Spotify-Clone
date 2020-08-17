import React, { useEffect, useState } from 'react';
import Landing from './page/landing/landing';
import { filterTokenResponse } from './services/spotify';
import SpotifyWebApi from 'spotify-web-api-js'
import Player from './page/player';


const spotify = new SpotifyWebApi()

function App() {

  const [token, setToken] = useState(null)

  // Run code base on given condition
  useEffect(() =>{

    const _token = filterTokenResponse()
    window.location.hash = ''

    if (_token) {

      setToken(_token)

      // Given Access To Spotify API
      
      spotify.setAccessToken(_token) 
      
      // getMe => Get User Account

      spotify.getMe().then(user => {

        console.log('User', user)

      })

    }

  }, []);

  return (
    <div className="App">
      {
        token ? (
          <Player />
        ) : (
          <Landing />
        )
      }
    </div>
  );
}

export default App;
