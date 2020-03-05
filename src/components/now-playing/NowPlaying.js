import React, {Component, Fragment} from 'react';
import './NowPlaying.css';
import SpotifyWebApi from 'spotify-web-api-js';
const spotifyApi = new SpotifyWebApi();

export default class NowPlaying extends Component {
    state = {
        nowPlaying: { name: 'Nothing is playing', albumArt: '', artistName: '' },
    };

    getNowPlaying(){
            spotifyApi.getMyCurrentPlaybackState()
                .then((response) => {
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
        const { nowPlaying } = this.state;
        return (
            <div className='now-playing'>
                <button className='now-playing__btn btn' onClick={() => this.getNowPlaying()}>
                    Check Now Playing
                </button>
                {nowPlaying.name !== 'Nothing is playing' &&
                    <div className='now-playing__wrapper'>
                        <div className='now-playing__title'>
                            Now Playing:
                        </div>
                        <div className="now-playing__content">
                            <div className="now-playing__artist">
                                Artist: {nowPlaying.artistName}
                            </div>
                            <div className="now-playing__song">
                                Song: {nowPlaying.name}
                            </div>
                            <div className='now-playing__image'>
                                <img className='now-playing__pic' src={nowPlaying.albumArt}/>
                            </div>
                        </div>

                    </div>
                    }
            </div>
        )
    }
}
