import React from 'react'
import {Link} from 'react-router-dom'
import './Sidebar.css'

function Sidebar() {
    return (
        <div className="sidebar">
            <Link to='/' className="sidebar__option">
                Top Artists
            </Link>
            <Link to='/top_tracks' className="sidebar__option">
                Top Tracks
            </Link>
        </div>
    )
}

export default Sidebar
