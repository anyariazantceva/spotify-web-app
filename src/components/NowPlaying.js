import React, {Component, Fragment} from 'react'
import SpotifyWebApi from 'spotify-web-api-js';
const spotifyApi = new SpotifyWebApi();

export default class NowPlaying extends Component {
    state = {
        nowPlaying: { name: 'Not Checked', albumArt: '' },
    }
    getNowPlaying(){
        spotifyApi.getMyCurrentPlaybackState()
            .then((response) => {
                this.setState({
                    nowPlaying: {
                        name: response.item.name,
                        albumArt: response.item.album.images[0].url
                    }
                });
            })
    }
    render() {
        return (
            <Fragment>
                <div>
                    Now Playing: { this.state.nowPlaying.name }
                </div>
                <div>
                    <img src={this.state.nowPlaying.albumArt} style={{ height: 150 }}/>
                </div>
                <button onClick={() => this.getNowPlaying()}>
                    Check Now Playing
                </button>
            </Fragment>
        )
    }
}
