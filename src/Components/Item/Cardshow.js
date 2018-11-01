import React, { Component } from "react";
class Cardshow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h2>Item :{this.props.item}</h2>
        <div className="container-fluid">
          <div className="row">
            <div>
              <h3>user1 :</h3> <h3>share is 10 rs</h3> <h1>sharecount</h1>
              <input type="number" step="0.02" defaultValue="10" />
              <h3>user1 :</h3> <h3>share is 10 rs</h3> <h1>sharecount</h1>
              <input type="number" step="0.02" defaultValue="10" />
              <h3>user1 :</h3> <h3>share is 10 rs</h3> <h1>sharecount</h1>
              <input type="number" step="0.02" defaultValue="10" />
              <h3>user1 :</h3> <h3>share is 10 rs</h3> <h1>sharecount</h1>
              <input type="number" step="0.02" defaultValue="10" />
            </div>

            <div className="tc">
              <h1>Total share=10</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cardshow;
