import React from "react";

const validationComponent = (props) => {
  return <div>{props.length > 5 ? "Text Long enough" : "Text too short"}</div>;
};

export default validationComponent;
