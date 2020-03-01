import React from "react";

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
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} value={props.value}/>
            <button onClick={handleClick}>Search</button>
        </form>
    )
}

export default SearchBar
