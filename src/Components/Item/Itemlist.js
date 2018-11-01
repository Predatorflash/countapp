import React, { Component } from "react";
import Item from "./Item";
class Itemlist extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <Item clicke={this.props.clicke} />;
  }
}

export default Itemlist;
