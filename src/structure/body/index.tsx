import React from 'react'
import Header from '../../components/header'
import './index.css'

interface spotifyProps {

  spotify: React.ReactNode

}

const Body: React.FC<spotifyProps> = ({ spotify }) => {

  return (
    <div className="body">
        <Header spotify={spotify} />
        
    </div>
  );


}

export default Body;
