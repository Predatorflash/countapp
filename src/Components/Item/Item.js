import React, { Component } from "react";
class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div
        className="bg-gold pa3 shadow-5 ma2 br3  bw3"
        onClick={this.props.clicke}
        id="countitem"
      >
        <h1 id="countitem">Item</h1>
      </div>
    );
  }
}

export default Item;
