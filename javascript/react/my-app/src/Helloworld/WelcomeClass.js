import React from "react";

class WelcomeClass extends React.Component {
  render() {
    return <h1>Welcome, {this.props.name}</h1>;
  }
}

export default WelcomeClass;