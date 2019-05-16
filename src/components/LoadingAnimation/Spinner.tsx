import "./Spinner.scss";
import React from "react";

interface Props {}

function Dots(props: Props) {
  return (
    <div className="lds-ellipsis">
      <div />
      <div />
      <div />
      <div />
    </div>
  );
}

export default Dots;
