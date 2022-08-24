import React from "react";
import "./title.scss";

function Title(props) {
  return (
    <div className="main-title">
      <h1>{props.text}</h1>
    </div>
  );
}

export default Title;
