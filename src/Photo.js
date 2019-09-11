import React from "react";

function Image(props) {
  const { imageUrl } = props;

  return <img src={imageUrl} />;
}

export default Image;
