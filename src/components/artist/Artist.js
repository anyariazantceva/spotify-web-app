import React from 'react';
import './Artist.css'

const Artist = (props) => {
    const checkImage = () => {
        if(props.image.length === 0) {
            return ""
        } else {
            return props.image[1].url
        }
    }
    return (
        <div className='artist-item'>
            <div className='artist__name'>Name: {props.name}</div>
            <div className='artist__followers'>Followers: {props.followers}</div>
            <div className='artist__genres'>{props.genres[0]}, {props.genres[1]}</div>
            <div className='artist__image'><img className='artist__pic' src={checkImage()} alt=""/></div>
        </div>
    )
}

export default Artist
