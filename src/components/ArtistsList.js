import React from 'react';
import './ArtistsList.css';


const artists = [
    {
        name: 'Architects',
        vocalist:  'Sam Carter',
        genre: 'metalcore',
        id: '1',
        image: './13592.jpg'
    },
    {
        name: 'Counterparts',
        vocalist: 'Brendan Murphy',
        genre: 'hardcore, metalcore',
        id: '2',
        image: './counteparts.jpg'
    },
    {
        name: 'Northlane',
        vocalist: 'Marcus Bridge',
        genre: 'metalcore',
        id: '3',
        image: './1200px-Northlane_2019_gen_use_lores.jpg'
    },
    {
        name: 'Loathe',
        vocalist: "Kadeem France",
        genre: 'experimental',
        id: '4',
        image: './loathe-band-promo-171.jpg'
    },
    {
        name: 'Tesseract',
        vocalist: 'Daniel Thompson',
        genre: 'progressive',
        id: '5',
        image: './unnamed.jpg'
    }
];

const listItems = artists.map((artist) => {
    return <div key={artist.id} className="artists__item">
            <div className="artist__name">{artist.name}</div>
            <div className="artist__genre">{artist.genre}</div>
            <div className="artist__vocalist">{artist.vocalist}</div>
            <div className="artist__image">
                <img src={artist.image} alt=""/>
            </div>

        </div>
});

const ArtistsList = () => {
    return (
        <div className="artists__list">
            {listItems}
        </div>
    )
}

export default ArtistsList
