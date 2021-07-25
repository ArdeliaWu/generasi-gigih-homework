const GifImage = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <img src={props.url} key={props.key} alt="a gif" />
    </div>
  );
}
export default GifImage;