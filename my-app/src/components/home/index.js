import React, { Component } from 'react';
import MyImage from './image/Image.js';
import PlaylistDetail from './playlistDetail/Detail';
import data from './playlistdata';


class MyComponent extends Component {
  render() {
    return (
      <div class="container">
        <MyImage url={data.album.images[1].url} />
        <PlaylistDetail
          title={data.name}
          artistName={data.artists[0].name}
          albumName={data.album.name}
        />
        <button id="submit">select</button>
      </div>
    );
  }
}

export default MyComponent;