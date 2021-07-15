import React from 'react';


const PlaylistDetail = ({ title, artistName, albumName }) => {
    return (
        <div>
            <p >Track title : {title}</p>
            <p >Artist : {artistName}</p>
            <p >Album : {albumName}</p>
        </div>
    );
}

export default PlaylistDetail;