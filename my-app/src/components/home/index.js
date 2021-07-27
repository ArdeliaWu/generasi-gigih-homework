import React, { Component } from 'react';
import MyImage from './image/Image.js';
import PlaylistDetail from './playlistDetail/Detail';
import data from './playlistdata';
import './index.css';





const PlaylistData = data.map((track) => {
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

class MyComponent extends Component {
  render() {
    return (
      <div>
        <table>
          <tbody>
            {PlaylistData}
          </tbody>
        </table>
      </div>
    );
  }
}

export default MyComponent;