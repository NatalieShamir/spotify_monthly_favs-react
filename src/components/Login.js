import React from 'react';

export default function Login() {
    const CLIENT_ID = "fd4f7c5a262e4313931a6038a17af7bc"
    const REDIRECT_URI = "http://localhost:3000/track-list"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"


    return (
        <div className="login-page">
            <h1 className="login-page__title">Spotify Monthly Favorites</h1>
            <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}><button className="login-page__button">Login
                to Spotify</button></a>
        </div >
    );
}