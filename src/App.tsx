import React, { useEffect, useState } from 'react';
import Landing from './page/landing/landing';
import { filterTokenResponse } from './services/spotify';
import SpotifyWebApi from 'spotify-web-api-js'
import Player from './page/player';
import { useDataLayerValue } from './dataLayer/dataLayer';


const spotify = new SpotifyWebApi()

function App() {

  const [{ user, token }, dispatch] = useDataLayerValue()

  // Run code base on given condition
  useEffect(() =>{

    const _token = filterTokenResponse()
    window.location.hash = ''

    if (_token) {
 
      // Given Access To Spotify API
      
      spotify.setAccessToken(_token) 
      
      // getMe => Get User Account

      dispatch({
        type: 'SET_TOKEN',
        token: _token
      })

      spotify.getMe().then(user => {
                
        dispatch({
          type: 'SET_USER',
          user,
        })

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
