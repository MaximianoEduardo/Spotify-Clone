import React from 'react'
import spotifyLogo from '../../assets/images/spotify2019-830x350.jpg'
import SideBarOptions from '../../components/sideBarOptions'
import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search'
import LibrayMusicIcon from '@material-ui/icons/LibraryMusic'
import './index.css'

function Sidebar() {
    return (
      <div className="sidebar">
        <img className='sidebar__logo' src={spotifyLogo} alt="Logo Spotify"/>
        <SideBarOptions title='Home' Icon={HomeIcon} />
        <SideBarOptions title='Search' Icon={SearchIcon} />
        <SideBarOptions title='Your Library' Icon={LibrayMusicIcon} />
        
        <br/>
        <strong className='sidebar__title'>Playlist</strong>
        <hr/>
      </div>
    );
  }
  
export default Sidebar;
