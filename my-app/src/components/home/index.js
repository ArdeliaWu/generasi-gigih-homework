import MySearch from './search/Search';

function MyComponent() {

  // GifList = Data.map((data) => {
  //   if (data.rating === 'g') {
  //     return (


  //     );
  //   }

  // }); 
  return (
    <div className="mygif" >
      <h1>GIF</h1>
      <MySearch />
      {/* <MyImage url={gif.url} key={gif.id} /> */}
      {/* {GifList} */}
    </div>
  );
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