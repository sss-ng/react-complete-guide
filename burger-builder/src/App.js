import React, { Component } from "react";
// import './App.module.css';

import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";

import Layout from "./components/Layout/Layout";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <p>
            Cillum irure voluptate ea aliquip nostrud cupidatat esse est. Nulla
            enim fugiat consequat tempor cupidatat laborum mollit ex adipisicing
            occaecat culpa. Magna ipsum magna sint minim sint nulla adipisicing
            minim ex pariatur officia incididunt voluptate.
          </p>
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
