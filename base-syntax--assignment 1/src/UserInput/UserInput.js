import React from "react";

const userInput = (props) => {
  return (
    <div>
      <input
        onChange={props.changed}
        type="text"
        placeholder="type something"
        value={props.currentName}
      ></input>
    </div>
  );
};

export default userInput;
