import React from 'react'



const MyImage = (props) => {
  return (
    <div>
      <img src={props.url} alt="a gif" />
    </div>
  );
}
export default MyImage;