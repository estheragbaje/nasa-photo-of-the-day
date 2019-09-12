import React from "react";

function Image(props) {
  const { src, alt, ...rest } = props;
  return <img src={src} alt={alt} {...rest} />;
}

export default Image;

/**
 * How to use:
 *
 * <Image className="img" src="./picture.png" alt="Picture"/>
 *
 * <img className="img" src="./picture.png" alt="Picture" />
 */
