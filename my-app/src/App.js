//import logo from './logo.svg';
//import data from './playlistdata';
import './App.css';
import MyComponent from './components/home/index.js';
function App() {
  return (
    <div className="App">
      <MyComponent />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      {/* <h1>Create Playlist</h1>
      <div className="playlist">
        <div className="container">
          <img className="trackCover" src={data.album.images[1].url} alt="Track Cover" />
          <p className="trackTitle">Track title : {data.name}</p>
          <p className="artistName">Artist : {data.artists[0].name}</p>
          <p calssName="albumName">Album : {data.album.name}</p>
          <button id="submit">select</button>
        </div>
      </div> */}



    </div>
  );
}

export default App;
