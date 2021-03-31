import React from 'react';
import "./Login.css";
import {loginUrl} from './spotify';

function Login() {
    return (
        <div className="login">
            <a href={loginUrl}>Login to Spotify</a> 
        </div>
    )
}

export default Login
