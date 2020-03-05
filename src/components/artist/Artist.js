import React from 'react';
import './Artist.css'
import DefaultImage from '../../img/photo-1511671782779-c97d3d27a1d4.jfif';

const Artist = (props) => {
    const checkImage = () => {
        if(props.image.length === 0) {
            return DefaultImage
        } else {
            return props.image[1].url
        }
    };

    return (
        <a target='_blank' className='artist__link' href={props.url}>
        <div className='artist-item'>
            <div className='artist__name'>{props.name}</div>
            <div className='artist__followers'>Followers: {props.followers}</div>
            <div className='artist__image'><img className='artist__pic' src={checkImage()} alt=""/></div>
        </div>
        </a>

    )
}

export default Artist
