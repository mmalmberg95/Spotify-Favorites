import React, {useEffect} from "react";
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from './Player.js';
import {useStateValue} from './StateProvider';

const spotify = new SpotifyWebApi(); 

function App() {

  const [{ token }, dispatch] = useStateValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash='';
    const _token = hash.access_token;


    if (_token){
      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      })

      spotify.setAccessToken(_token); 

      spotify.getMe().then((user) => {
        dispatch({
          type: 'SET_USER',
          user: user,
        }) 
      });

      spotify.getMyTopArtists().then((response) =>
      dispatch({
        type: "SET_TOP_ARTISTS",
        top_artists: response,
      })
    );
   
      spotify.getMyTopTracks({time_range: 'long_term'}).then((response) =>
      dispatch({
        type: "SET_TOP_TRACKS",
        top_tracks: response,
      })
    );

    }
}, []);



  return (
    <div className="app">
      {
        token ? (
          <Player spotify={spotify} />
        ) : (
          <Login />
        )
      }
    </div>
  );
}

export default App;
