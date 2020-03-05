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
            artists: []

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
        this.clearField();

    };
    clearField = () => {
        this.setState({
            searchValue: ''
        })
    }

    getArtist = () => {
        spotifyApi.searchArtists(this.state.searchValue)
            .then((response) => {
                console.log(response.artists.items)
                this.setState({
                    artists: response.artists.items
                });
            })
    }

    render() {
        const ArtistsList = <Fragment>
            {this.state.artists.map((item) => {
                return <Artist
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    url={item.external_urls.spotify}
                    followers={item.followers.total}
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
                />

                <div className="artists__list">
                    {ArtistsList}
                </div>
            </div>
        )
    }
}
