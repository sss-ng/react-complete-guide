import React from "react";
import Auxiliary from "../../../hoc/Auxiliary";
import Button from "../../UI/Button/Button";

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((ingredient) => {
    return (
      <li key={ingredient}>
        <span style={{ textTransform: "capitalize" }}>{ingredient}</span>:{" "}
        {props.ingredients[ingredient]}
      </li>
    );
  });

  return (
    <Auxiliary>
      <h3>Your Order</h3>
      <p>Your burger has the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>Total Price: {props.price.toFixed(2)}</strong>
      </p>
      <p>Continue to checkout?</p>
      <Button btnType="Danger" clicked={props.purchaseCancel}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.purchaseContinue}>
        CONTINUE
      </Button>
    </Auxiliary>
  );
};

export default orderSummary;
