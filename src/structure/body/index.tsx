import React from 'react'
import Header from '../../components/header'
import { useDataLayerValue } from '../../dataLayer/dataLayer'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled'
import FavoriteIcon from '@material-ui/icons/Favorite'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import './index.css'

interface spotifyProps {

  spotify: React.ReactNode

}

const Body: React.FC<spotifyProps> = ({ spotify }) => {

  const [{ discover_weekly }, dispatch ] = useDataLayerValue()

  return (
    <div className="body">
        <Header spotify={spotify} />

        <div className="body__info">
          <img src={discover_weekly?.images[0].url} alt="Discover Weekly"/>
          <div className="body__infoText">
            <strong>Playlist</strong>
            <h2>Discover Weekly</h2>
            <p>{discover_weekly?.description}</p>
          </div>
        </div>

        <div className="body__songs">

          <div className="body__icons">
            <PlayCircleFilledIcon className='body__shuffle' />
            <FavoriteIcon fontSize='large' />
            <MoreHorizIcon />
          </div>

        </div>

    </div>
  );


}

export default Body;
