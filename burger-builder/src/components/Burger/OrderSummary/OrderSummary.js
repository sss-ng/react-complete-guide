import React from "react";
import Auxiliary from "../../../hoc/Auxiliary";

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((ingredient) => {
    return (
      <li key={ingredient}>
        <span style={{ textTransform: "capitalize" }}>{ingredient}</span>: {props.ingredients[ingredient]}
      </li>
    );
  });

  return (
    <Auxiliary>
      <h3>Your Order</h3>
      <p>Your burger has the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to checkout?</p>
    </Auxiliary>
  );
};

export default orderSummary;
