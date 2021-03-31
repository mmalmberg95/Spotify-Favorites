import React, {useEffect, useState} from 'react'
import "./TopArtists.css"
import { useStateValue } from './StateProvider'
import {Artist} from "./Artist"
import SpotifyWebApi from 'spotify-web-api-js'
import {Button} from './Button.js'

const s = new SpotifyWebApi


function TopArtists() {

    const [activeRange, setActiveRange] = useState('long_term');

    const [{top_artists}, dispatch] = useStateValue(); 


    useEffect(() => {
        s.getMyTopArtists({time_range: activeRange}).then(response =>
        dispatch({
          type: "SET_TOP_ARTISTS",
          top_artists: response,
        })        
      );

    }, [activeRange])
    


    return (
        <div className='topArtists'>
            <div className="headings">
                    <h1>Top Artists</h1>
                    <ul className='buttons'>
                        <Button activeButton = {activeRange === 'long_term'} onClick={() => setActiveRange('long_term')}>All Time</Button>
                        <Button activeButton = {activeRange === 'medium_term'} onClick={() => setActiveRange('medium_term')}>6 months</Button>
                        <Button activeButton = {activeRange === 'short_term'} onClick={() => setActiveRange('short_term')}>4 weeks</Button>
                    </ul>
                </div>
                <hr />
                <ul className='list'>
                    {top_artists?.items?.map((artists, i)=> (
                        <Artist artist={artists} artistStyle = 'artist--grid' key={i} />
                    ))}
                </ul>
        </div>
    )
}

export default TopArtists
