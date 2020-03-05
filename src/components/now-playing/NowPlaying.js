import React, {Component, Fragment} from 'react';
import './NowPlaying.css';
import SpotifyWebApi from 'spotify-web-api-js';
import ErrorMessage from "../ErrorMessage";
const spotifyApi = new SpotifyWebApi();

export default class NowPlaying extends Component {
    state = {
        nowPlaying: { name: 'Not Checked', albumArt: '', artistName: '' },
    }
    getNowPlaying(){
            spotifyApi.getMyCurrentPlaybackState()
                .then((response) => {
                    console.log(response.item)
                    this.setState({
                        nowPlaying: {
                            name: response.item.name,
                            albumArt: response.item.album.images[0].url,
                            artistName: response.item.artists[0].name
                        }
                    });
                })

    }
    render() {
        return (
            <div className='now-playing'>
                <button className='now-playing__btn btn' onClick={() => this.getNowPlaying()}>
                    Check Now Playing
                </button>
                {this.state.nowPlaying.name !== 'Not Checked' &&
                    <div className='now-playing__wrapper'>
                        <div className='now-playing__title'>
                            Now Playing:
                        </div>
                        <div className="now-playing__content">
                            <div className="now-playing__artist">
                                Artist: {this.state.nowPlaying.artistName}
                            </div>
                            <div className="now-playing__song">
                                Song: {this.state.nowPlaying.name}
                            </div>
                            <div className='now-playing__image'>
                                <img className='now-playing__pic' src={this.state.nowPlaying.albumArt}/>
                            </div>
                        </div>

                    </div>
                    }
            </div>
        )
    }
}
