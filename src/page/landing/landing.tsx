import React from 'react'
import spotifyLogoImg from '../../assets/images/spotify2019-830x350.jpg'
import './index.css'

function Landing() {
    return (
      <div className='landing'>
            <img src={spotifyLogoImg} alt="Spotify Logo"/>
            <a> login with spotify  </a>
      </div>
    );
  }
  
  export default Landing;
