import React, {useEffect} from 'react'
import './Profile.css'
import { useStateValue } from './StateProvider'
import {Link} from 'react-router-dom'
import SpotifyWebApi from 'spotify-web-api-js'
import TopArtists from './TopArtists';
import {Artist} from './Artist'
import {Song} from './Song'
import {Button} from './Button.js'

const s = new SpotifyWebApi;


function Profile() {

    const [{user, top_artists, top_tracks}, dispatch] =  useStateValue();

    useEffect(() => {
        s.getMyTopTracks({time_range: 'long_term' }).then((response) =>
         dispatch({
          type: "SET_TOP_TRACKS",
          top_tracks: response,
        }),
      ); 

      s.getMyTopArtists({time_range: 'long_term' }).then((response) =>
      dispatch({
        type: "SET_TOP_ARTISTS",
        top_artists: response,
      })
    );

    }, [])
    
    return (
        <>
        { user ? (
            <div className='profile'>
                <div className="header">
                    <div className="avatar">
                        <img src={user.images[0].url} alt='avatar' />
                    </div>
                    <div className="userName">
                        <h2>Matt Malmberg</h2>
                    </div>
                </div>
                <div className="body">
                    <div className="charts">
                        <div className="artists">
                            <div className="heading">
                                <h2>Top Artists of All Time</h2>
                                <Link to='/top_artists'>
                                    <Button>See More</Button>
                                </Link>
                            </div>
                        <ul>
                            {top_artists?.items?.slice(0,10).map((artists, i)=> (
                                <Artist artist={artists} artistStyle='artist--list' key={i} />
                            ))}
                        </ul>
                        </div> 
                        <div className="tracks">
                            <div className="heading">
                                <h2>Top Tracks of All Time</h2>
                                <Link to='/top_tracks'>
                                    <Button>See More</Button>
                                </Link>
                            </div>
                        <ul>
                            {top_tracks?.items?.slice(0,10).map((tracks, i)=> (
                                <Song track={tracks} key={i} />
                            ))}
                        </ul>
                        </div>
                    </div> 
                </div>
            </div>
            
            ) : (
                <TopArtists/>
            )
        }
    </>
    )
}

export default Profile
