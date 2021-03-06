import React, {Component} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import App from "../App";
import NowPlaying from "./now-playing/NowPlaying";
import ArtistsList from "./artists-list/ArtistsList";

export default class NewRouter extends Component {
    render() {
        return (
            <Router>
                <ul className="header__list">
                    <li className="header__list-item"><Link className='header__link' to='/'>Home</Link></li>
                    <li className="header__list-item"><Link className='header__link' to='/now-playing'>Now playing</Link></li>
                    <li className="header__list-item"><Link className='header__link' to='/search-artist'>Search by artist</Link></li>
                </ul>
                <Switch>
                    <Route exact path="/home" component={App} />
                    <Route path="/now-playing">
                        { this.props.loggedIn &&
                        <NowPlaying loggedIn={this.props.loggedIn}/>
                        }
                    </Route>
                    <Route path="/search-artist" component={ArtistsList}/>

                </Switch>
            </Router>
        )
    }
}
