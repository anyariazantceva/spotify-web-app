import React from 'react';
import './Artist.css'
import DefaultImage from '../../img/photo-1511671782779-c97d3d27a1d4.jfif';

const Artist = ({url, name, followers, image}) => {
    const checkImage = () => {
        if(image.length === 0) {
            return DefaultImage
        } else {
            return image[1].url
        }
    };

    return (
        <a target='_blank'  rel="noopener noreferrer" className='artist__link' href={url}>
        <div className='artist-item'>
            <div className='artist__name'>{name}</div>
            <div className='artist__followers'>Followers: {followers}</div>
            <div className='artist__image'><img className='artist__pic' src={checkImage()} alt=""/></div>
        </div>
        </a>

    )
}

export default Artist
