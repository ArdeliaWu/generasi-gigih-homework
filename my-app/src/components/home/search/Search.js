import React, { useState } from 'react';
import GifImage from '../image/Image.js';
import axios from 'axios';

const ApiKey = process.env.REACT_APP_GIF_KEY;
const MySearch = () => {
    //define state
    const [Searchtxt, setSearchtxt] = useState(" ");
    const [data, setData] = useState({ hits: [] });

    const handleChange = (event) => setSearchtxt(event.target.value);
    const handleClick = async () => {
        // console.log("Ok");
        try {
            const response = await axios
                .get("https://api.giphy.com/v1/gifs/search?", {
                    params: {
                        api_key: ApiKey,
                        q: Searchtxt,
                        limit: 12,
                    },
                })
            if (!response.ok) {
                throw Error(response.statusText);
            }

            const result = await response.json();
            setData({ data: result });

        }

        catch (error) {
            console.log("error");
        }
        return (data);
    }

    return (
        <div>
            <input className="searchBar" type="text" placeholder="search" value={Searchtxt} onChange={handleChange} />
            <button className="searchBtn" onClick={handleClick}>search</button>
            {
                data.hits.map(gif => {
                    console.log(gif.data);
                    return (
                        <GifImage src={gif.url} alt="gifs" key={gif.id} />
                    );
                })
            }
        </div>
    );
}

export default MySearch;

