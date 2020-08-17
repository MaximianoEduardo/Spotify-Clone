import React from 'react'
import Sidebar from '../../structure/sidebar'
import Body from '../../structure/body'
import './index.css'


interface spotifyProps {

  spotify: Array<{
    user: string
  }>

}


const Player: React.FC<spotifyProps> = ({ spotify, ...rest }) => {

  return (
    <div className="player">
      <div className="player__body">
        <Sidebar />
        <Body />
      </div>
    </div>
  );

}
  
  
export default Player;
