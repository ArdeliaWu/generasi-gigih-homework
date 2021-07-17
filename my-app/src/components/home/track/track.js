import React from 'react';
import data from '../playlistdata';
import MyImage from '../image/Image.js';
import PlaylistDetail from '../playlistDetail/Detail';
import './track.css';

const Track = data.map((track) => {
    return (
        <tr className="tblRow">
            <div className="container">
                <MyImage url={track.album.images[1].url} />
                <PlaylistDetail
                    title={track.name}
                    artistName={track.artists[0].name}
                    albumName={track.album.name}
                />
                <button id="submit">select</button>
            </div>
        </tr>
    );

});

const SongTrack = () => {
    return (
        <div>
            <table>
                <tbody>
                    {Track}
                </tbody>
            </table>
        </div>
    );
}

export default SongTrack;