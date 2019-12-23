import React, { Component, Fragment } from "react";

class ReturnTypes extends Component {
  render() {
    return "hello";
	 /* return {
	 	<fragment>
		<header />,
		<div />
		</fragment>
	 };
	 */
  }
}

class App extends Component {
  render() {
    return (
      <Fragment>
        <ReturnTypes />
      </Fragment>
    );
  }
}
