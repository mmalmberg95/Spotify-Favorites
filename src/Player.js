import React from 'react'
import './Player.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Sidebar from "./Sidebar"
import TopArtists from './TopArtists';
import TopSongs from './TopSongs'
import Profile from './Profile'

function Player() {
    return (
        <Router>
            <div className='player'>
                    <Switch>
                        <Route path='/' component={Profile} exact/>
                        <Route path='/top_artists' component={TopArtists} />
                        <Route path='/top_tracks' component={TopSongs}/>
                    </Switch>
            </div>
        </Router>
    )
}

export default Player
