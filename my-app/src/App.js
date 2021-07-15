//import logo from './logo.svg';
//import data from './playlistdata';
import './App.css';
import MyComponent from './components/home/index.js';
function App() {
  return (
    <div className="App">
      <h1>Create Playlist</h1>
      <div className="playlist">
        <div class="container">
          <MyComponent />
        </div>
      </div>

    </div>
  );
}

export default App;
