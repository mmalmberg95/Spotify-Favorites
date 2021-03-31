import React from 'react'
import "./Artist.css"

const STYLES = ['artist--list', 'artist--grid']

export const Artist = ({artist, artistStyle}) => {

    const checkArtistStyle = STYLES.includes(artistStyle) ? artistStyle : STYLES[0];

    return (
        <div className={`container ${checkArtistStyle}`}>
            <div className={`item ${checkArtistStyle}`}>
                <div className= 'artwork'>
                    <img className={`img ${checkArtistStyle}`} src={artist.images[2].url} alt="Artist Artwork"/>
                </div>
                <div className={`artist ${checkArtistStyle}`}>
                    <span>{artist.name}</span>
                </div>
            </div>
            <br />
        </div>
    )
}

