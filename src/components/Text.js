import React from "react";

function Text(props) {
  const { children, ...rest } = props;

  return <p {...rest}>{children} </p>;
}

export default Text;

/**
 * How to use
 *
 * <Text classNAme="text" id="text">{...}</Text>
 * <Text children="This is a <b>paragraph</b>" />
 *
 * <p>sdfsbdfjksbfskjdfsdfd <b>sddsfbsdfkbsdf</b> <a>sdfjsdkfbds</a></p>
 */
