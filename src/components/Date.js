import React from "react";

function Date(props) {
  const { children, dateTime, ...rest } = props;

  return (
    <time dateTime={dateTime} {...rest}>
      {children}
    </time>
  );
}

export default Date;
