import React from 'react'
import './index.css'
import Sidebar from '../../structure/sidebar'
import Body from '../../structure/body'

function Player({ spotify }) {
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
