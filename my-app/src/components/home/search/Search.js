import React, { useState } from 'react';
import GifImage from '../image/Image.js';
import './Search.css';



const apiKey = process.env.REACT_APP_GIF_KEY;
const MySearch = () => {
    //define state
    const [Searchtxt, setSearchtxt] = useState(" ");
    const [Gifdata, setGifdata] = useState([]);

    const handleChange = (event) => setSearchtxt(event.target.value);

    const handleClick = async () => {
        const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${Searchtxt}&limit=12`)
        const result = await response.json(); //.then(response => response.json());
        //console.log(result);
        setGifdata(result.data);
        console.log(Gifdata);
    }

    return (
        <div className="searchBar">
            <input className="searchInput" type="text" placeholder="search" value={Searchtxt} onChange={handleChange} />
            {" "}<button className="searchBtn" onClick={handleClick}>search</button><br />
            {
                Gifdata && Gifdata.map((gif) => {
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

