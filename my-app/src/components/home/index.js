//import React from 'react';
import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';
import MyImage from './image/Image.js';
import MySearch from './search/Search';

//ReactDOM.render(
//<React.StrictMode>
class MyComponent extends Component {
  render() {
    const gif = {
      id: '4HrBfVJJveBNS9ytSk',
      title: 'Nintendo Plotting GIF by Gaming GIFs',
      uploadedDate: '2018-04-03 15:21:50',
      url: 'https://media4.giphy.com/media/4HrBfVJJveBNS9ytSk/200w.gif?cid=cb3f2bebpuo6jj0g5f9gfibjre2zzbb4yb1cfshtplanlrpw&rid=200w.gif&ct=g',
      webp: 'https://media4.giphy.com/media/4HrBfVJJveBNS9ytSk/giphy.webp?cid=cb3f2bebpuo6jj0g5f9gfibjre2zzbb4yb1cfshtplanlrpw&rid=giphy.webp&ct=g',
    }
    return (
      <div className="mygif" >
        <h1>GIF</h1>
        <MySearch />
        <MyImage url={gif.url} />
      </div>
    );
  }
}

//</React.StrictMode>,
//document.getElementById('root')
//);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

//Search bar of input element
//Search button next to search bar
//An img with the source: https://media.giphy.com/media/Vh8pbGX3SGRwFDh3V0/source.gif 
//Place it in /src/pages/home/index.js and call it from App.js
export default MyComponent;