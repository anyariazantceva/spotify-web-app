import React, {Component} from 'react';
import './ArtistsList.css';


export default class ArtistsList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchValue: '',
            artists: null
        }
    }

    handleChange = (e) => {
        this.setState({
            searchValue: e.target.value
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            searchValue: e.target.value
        })
        fetch('https://api.spotify.com/v1/me/player/recently-played')
            .then(response => response.json())
            .then(data => console.log(data))

    };


    render() {
        return (
            <div className='container'>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange} value={this.state.value}/>
                    <button>Search</button>
                </form>
                <div className="list">

                </div>
            </div>
        )
    }
}
