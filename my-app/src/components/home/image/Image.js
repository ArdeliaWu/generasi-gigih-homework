import React from 'react';


const MyImage = (props) => {
  return (
    <div>
      <img className="trackCover" src={props.url} alt="Track Cover" />
    </div>
  );
}
export default MyImage;