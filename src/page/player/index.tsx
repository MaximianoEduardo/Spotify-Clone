import React from 'react'
import Sidebar from '../../structure/sidebar'
import Body from '../../structure/body'
import './index.css'
import Footer from '../../structure/footer'


interface spotifyProps {

  spotify: React.ReactNode

}


const Player: React.FC<spotifyProps> = ({ spotify }) => {

  return (
    <div className="player">
      <div className="player__body">
        <Sidebar />
        <Body spotify={spotify} /> 
      </div>
      <Footer />
    </div>
  );

}
  
  
export default Player;
