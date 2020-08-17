import React, { useEffect, useState } from 'react';
import Landing from './page/landing/landing';
import { filterTokenResponse } from './services/spotify';
import SpotifyWebApi from 'spotify-web-api-js'
import Player from './page/player';
import { useDataLayerValue } from './services/dataLayer/dataLayer';


const spotify = new SpotifyWebApi()

function App() {

  const [{ user }, dispatch] = useDataLayerValue()
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
        
        dispatch({
          type: 'SET_USER',
          user,
        })

      })

    }

  }, []);

  console.log('userFromDataLayer', user)

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
