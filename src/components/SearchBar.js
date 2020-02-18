import React, { Component } from "react";
import './SearchBar.css';


const ErrorMessage = () => {
    return (
        <div>Please enter the value!</div>
    )
}
const SuccessMessage = () => {
    return (
        <div>We found your favourite band!</div>
    )
}
export default class SearchBar extends Component {
    constructor (props) {
        super(props);
        this.state = {
            value: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        return this.state.value !== '' ? <SuccessMessage/> : <ErrorMessage/>

    }

    render() {
        return (
            <div className='search-bar'>
                <form className="form" onSubmit={this.handleSubmit}>
                    <div className="form__group">
                        <input value={this.state.value} type="text" onChange={this.handleChange} className="search-bar__input"/>
                    </div>
                    <div className="form__action">
                        <button className="form__btn">Search</button>
                    </div>
                </form>
                {this.state.value}
            </div>
        )
    }
}
