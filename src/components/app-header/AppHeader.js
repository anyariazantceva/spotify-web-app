import React, { Component } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import './AppHeader.css';
import NewRouter from "../NewRouter";

const spotifyApi = new SpotifyWebApi();

export default class AppHeader extends Component {
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
        var hashParams = {};
        var e, r = /([^&;=]+)=?([^&;]*)/g,
            q = window.location.hash.substring(1);
        e = r.exec(q)
        while (e) {
            hashParams[e[1]] = decodeURIComponent(e[2]);
            e = r.exec(q);
        }
        return hashParams;
    }

    render() {

        return (
            <div className='app-header header'>
                <div className="header__title">Music App with Spotify API</div>
                {this.state.loggedIn === false &&
                <a className='header__link' href='http://localhost:8888' > Login to Spotify </a>
                }
                <NewRouter loggedIn={this.state.loggedIn}/>
                </div>

        )
    }
}

