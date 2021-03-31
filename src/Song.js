import React from 'react'
import "./Song.css"

export const Song = ({track}) => {

    const formatDuration = millis => {
        const minutes = Math.floor(millis / 60000);
        const seconds = ((millis % 60000) / 1000).toFixed(0);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
      };

    return (
        <div className="container">
            <div className="row">
                <div className="left">
                    <div className="artwork">
                        <img className='img' src={track.album.images[1].url} alt="Album Artwork"/>
                    </div>
                    <div className="info">
                        <span className='title'>{track.name}</span>
                        <span className='name'>{track.artists[0].name}</span>
                    </div>
                </div>
                <div className="right">
                    <div className="duration">
                        <span className='length'>{formatDuration(track.duration_ms)}</span>
                    </div>
                </div>
            </div>
            <br />
        </div>
    )
}

