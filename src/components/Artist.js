import React from 'react';

const Artist = (props) => {
    return (
        <div key={props.key}>
            <div>Name: {props.name}</div>
            <div>Followers: {props.followers}</div>
            <div>Genres: {props.genres[0]}, {props.genres[1]}</div>
        </div>
    )
}

export default Artist
