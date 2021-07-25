// import React, { useState } from 'react';
// //import GifImage from '../image/image.js';

// const apiKey = process.env.REACT_APP_GIF_KEY;
// const MySearch = () => {
//     const [searchTxt, setSearchtxt] = useState('');
//     const [gifData, setGifdata] = useState([]);


//     const handleChange = (e) => setSearchtxt(e.target.value);//to set state better use funciton rather than object because props and state may be update asyncrhonously
//     const handleClick = async () => {
//         const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTxt}&limit=12`);
//         const data = await response.json();
//         setGifdata(data);
//         console.log(gifData);
//         // gifData.map((gif) => {
//         //     
//         //     <GifImage url={gif.images.original.url} alt="gifs" key={gif.id} title={gif.title} />
//         // }
//     }

//     return (
//         <div >
//             <input className="searchBar" type="text" placeholder="search" value={searchTxt} onChange={handleChange} /> {/*or use onChange like this onChange={()=>{handleChange()}} */}
//             <button className="searchBtn" onClick={handleClick}>Search</button>
//         </div>
//     )
// }

// export default MySearch;