import React from "react";

const Dot = props => {
  const { slidePosition, dotNumber } = props;
  const classNames =
    Math.ceil(slidePosition / 2) === dotNumber ? "dot active" : "dot";
  const num = Math.ceil(slidePosition / 2) === dotNumber ? dotNumber : "";
  return <span className={classNames}>{num}</span>;
};

export default Dot;
