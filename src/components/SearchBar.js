import React from "react";
import './SearchBar.css';

const SearchBar = (props) => {
    const handleChange = (e) => {
        props.handleChange(e)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.handleSubmit(e)
    }

    const handleClick = () => {
        props.handleClick()
    }
    const handleSong = () => {
        props.handleSong()
    }
    return (
        <form className='search-bar' onSubmit={handleSubmit}>
            <input className='search__input' type="text" onChange={handleChange} value={props.value}/>
            <button className='search__btn btn' onClick={handleClick}>Search by Artist</button>
            <button className='search__btn btn' onClick={handleSong}>Search by Song</button>
        </form>
    )
}

export default SearchBar
