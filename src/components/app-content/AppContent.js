import React, { Component } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import './AppContent.css';
import NewRouter from "../NewRouter";

const spotifyApi = new SpotifyWebApi();

export default class AppContent extends Component {
    constructor(props) {
        super(props)
        const params = this.getHashParams();
        const token = params.access_token;
        if (token) {
            spotifyApi.setAccessToken(token);
        }
        this.state = {
            loggedIn: token ? true : false
        }
    }

    getHashParams() {
        const hashParams = {};
        let e, r = /([^&;=]+)=?([^&;]*)/g,
            q = window.location.hash.substring(1);
        e = r.exec(q)
        while (e) {
            hashParams[e[1]] = decodeURIComponent(e[2]);
            e = r.exec(q);
        }
        return hashParams;
    }
    toggleTheme = () => {
        this.props.toggleTheme();
    }

    render() {
        const { loggedIn } = this.state;

        return (
            <div className='app-header header'>
                <div className="header__title">Spotify API Application</div>
                {loggedIn === false &&
                    <a className='header__link' href='http://localhost:8888'> Login to Spotify </a>
                }
                <div className='header__change-theme'>
                    <button className='btn search__btn' onClick={this.toggleTheme}>Change theme</button>
                </div>
                <NewRouter loggedIn={loggedIn}/>
                </div>

        )
    }
}

