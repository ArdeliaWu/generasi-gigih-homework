import './Image.css';

const GifImage = (props) => {
  return (
    <div className="Giflist">
      <h1>{props.title}</h1>
      <img src={props.url} alt="a gif" />
    </div>
  );
}
export default GifImage;