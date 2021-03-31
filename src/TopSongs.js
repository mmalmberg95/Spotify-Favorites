import React, {useEffect, useState} from 'react'
import "./TopSongs.css"
import { useStateValue } from './StateProvider'
import {Song} from "./Song"
import SpotifyWebApi from 'spotify-web-api-js'
import {Button} from './Button.js'


const s = new SpotifyWebApi


function TopSongs() {

    const [activeRange, setActiveRange] = useState('long_term');

    const [{top_tracks}, dispatch] = useStateValue();


    useEffect(() => {
        s.getMyTopTracks({time_range: activeRange }).then((response) =>
         dispatch({
          type: "SET_TOP_TRACKS",
          top_tracks: response,
        }),
      ); 

    }, [activeRange])

    return (

        <div className="topsongs">
            <div className="headings">
                <h1>Top Songs</h1>
                <ul className="buttons">
                    <Button activeButton = {activeRange === 'long_term'} onClick={() => setActiveRange('long_term')}>All Time</Button>
                    <Button activeButton = {activeRange === 'medium_term'} onClick={() => setActiveRange('medium_term')}>6 months</Button>
                    <Button activeButton = {activeRange === 'short_term'} onClick={() => setActiveRange('short_term')}>4 weeks</Button>
                </ul>
            </div>
            <hr />
            <ul>
                {top_tracks?.items?.map((tracks, i)=> (
                    <Song track={tracks} key={i} />
                ))}
            </ul>
        </div>
    )
}

export default TopSongs
