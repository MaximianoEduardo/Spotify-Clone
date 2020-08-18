import React from 'react'
import './index.css'

interface tracksProps {

    track: any
  
}

const SongRow: React.FC<tracksProps> = ({ track }) => {


    return(
        <div className="songRow" >
            <img className="songRow__album" src={track?.album.images[0].url} alt="" />
            <div className="songRow__info">
                <h2>{track?.name}</h2>
                <p>
                {track?.artists.map((artist:any) => artist.name).join(", ")} -{" "}
                {track?.album.name}
                </p>
            </div>
        </div>
    )

}


export default SongRow;
