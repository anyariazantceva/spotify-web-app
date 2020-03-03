import React, { Component } from 'react';
import './App.css';
import AppHeader from "./components/app-header/AppHeader";

class App extends Component {
    constructor(){
        super();

    }


    render() {
        return (
            <div className="App">
                <AppHeader/>
            </div>
        );
    }
}

export default App;
