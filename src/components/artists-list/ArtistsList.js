import React, {Component, Fragment} from 'react';
import './ArtistsList.css';
import SearchBar from "../SearchBar";
import SpotifyWebApi from 'spotify-web-api-js';
import Artist from "../artist/Artist";

const spotifyApi = new SpotifyWebApi();

export default class ArtistsList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchValue: '',
            artists: [],
            songs: []

        }
    }

    handleChange = (e) => {
        this.setState({
            searchValue: e.target.value
        })
    };

    handleSubmit = (e) => {
        this.setState({
            searchValue: e.target.value
        })

    };

    getArtist = () => {
        spotifyApi.searchArtists(this.state.searchValue)
            .then((response) => {
                this.setState({
                    artists: response.artists.items

                })
                console.log(this.state.artists)
            })
    }
    getSong = () => {
        spotifyApi.searchTracks(this.state.searchValue)
            .then((response) => {
                console.log(response)
            })
    }

    render() {
        const list = <Fragment>
            {this.state.artists.map((item) => {
                return <Artist
                    key={item.id}
                    name={item.name}
                    followers={item.followers.total}
                    genres={item.genres}
                    image={item.images}
                />
            })}
        </Fragment>
        return (
            <div className='container'>
                <SearchBar
                    handleClick={this.getArtist}
                    value={this.state.searchValue}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    handleSong={this.getSong}
                />

                <div className="artists__list">
                    {list}
                </div>
            </div>
        )
    }
}
