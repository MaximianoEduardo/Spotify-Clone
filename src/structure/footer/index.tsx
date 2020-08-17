import React from 'react'
import './index.css'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline'
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious'
import SkipNextIcon from '@material-ui/icons/SkipNext'
import ShuffleIcon from '@material-ui/icons/Shuffle'
import RepeatIcon from '@material-ui/icons/Repeat'

function Footer() {
    return (
      <div className="footer">
          <div className="footer__left">
            <span>Album and song details</span>
          </div>
          <div className="footer__center">
            <ShuffleIcon className='footer__green' />
            <SkipPreviousIcon className='footer__icon' />
            <PlayCircleOutlineIcon fontSize='large' className='' />
            <SkipNextIcon className='footer__icon' />
            <RepeatIcon className='footer__green' />
          </div>
          <div className="footer__right">
            <p> Volume controls </p>
          </div>
      </div>
    );
  }
  
export default Footer;
