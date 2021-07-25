import React, { useState } from 'react';
import GifImage from '../image/Image.js';
//import axios from 'axios';

const apiKey = process.env.REACT_APP_GIF_KEY;
const MySearch = () => {
    //define state
    const [Searchtxt, setSearchtxt] = useState(" ");
    const [Gifdata, setGifdata] = useState([]);

    const handleChange = (event) => setSearchtxt(event.target.value);

    const handleClick = async () => {
        const data = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${Searchtxt}&limit=12`)
            .then(response => response.json());
        setGifdata(data);
        //console.log(gifData);
    }

    return (
        <div>
            <input className="searchBar" type="text" placeholder="search" value={Searchtxt} onChange={handleChange} />
            <button className="searchBtn" onClick={handleClick}>search</button>
            {
                Gifdata.map((gif) => {
                    return (
                        <GifImage url={gif.images.original.url} alt="gifs" key={gif.id} title={gif.title} />
                    );
                }
                )
            }
        </div>
    );
}

export default MySearch;

