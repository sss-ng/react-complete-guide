import React, { Component } from "react";
import Auxiliary from "../../hoc/Auxiliary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const PRICES = { salad: 0.3, bacon: 1.2, cheese: 0.5, meat: 1.5 };

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4,
    purchaseable: false,
    purchasing: false,
  };

  updatePurchaseState(ingredients) {
    const count = Object.values(ingredients).reduce((sum, val) => sum + val, 0);
    this.setState({ purchaseable: count > 0 });
  }

  addIngredientHandler = (type) => {
    const prevCount = this.state.ingredients[type];
    const newIngredients = { ...this.state.ingredients };
    newIngredients[type] = prevCount + 1;

    const prevPrice = this.state.totalPrice;
    const newPrice = prevPrice + PRICES[type];

    this.setState({
      ingredients: newIngredients,
      totalPrice: newPrice,
    });

    this.updatePurchaseState(newIngredients);
  };

  removeIngredientHandler = (type) => {
    if (this.state.ingredients[type] <= 0) {
      return;
    }

    const prevCount = this.state.ingredients[type];
    const newIngredients = { ...this.state.ingredients };
    newIngredients[type] = prevCount - 1;

    const prevPrice = this.state.totalPrice;
    const newPrice = prevPrice - PRICES[type];

    this.setState({
      ingredients: newIngredients,
      totalPrice: newPrice,
    });

    this.updatePurchaseState(newIngredients);
  };

  purchasingHandler = () => {
    this.setState({ purchasing: true });
  };

  render() {
    const disabledIngredients = { ...this.state.ingredients };

    for (const key in disabledIngredients) {
      disabledIngredients[key] = disabledIngredients[key] <= 0;
    }

    return (
      <Auxiliary>
        <Modal>
          <OrderSummary ingredients={this.state.ingredients}></OrderSummary>
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabledInfo={disabledIngredients}
          price={this.state.totalPrice}
          purchaseable={this.state.purchaseable}
        />
      </Auxiliary>
    );
  }
}

export default BurgerBuilder;
