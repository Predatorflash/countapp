import React, { Component } from "react";
class Additem extends Component {
  submitform = e => {
    e.preventDefault();
    console.log(e.target);
    this.props.itemadded();
  };
  render() {
    return (
      <div>
        <form onSubmit={this.submitform}>
          <p>Item name:</p>
          <input type="text" id="firstname" required />

          <p> Item value:</p>

          <input type="number" id="itemvalue" step="0.01" required />
          <p> Item share:</p>
          <input type="number" id="itemshar" required />
          <br />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Additem;
