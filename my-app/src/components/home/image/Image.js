const GifImage = (props) => {
  return (
    <div>
      <img src={props.url} key={props.key} alt="a gif" />
    </div>
  );
}
export default GifImage;