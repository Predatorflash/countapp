import React, { Component } from "react";
import Cardshow from "./Components/Item/Cardshow";
import Additem from "./Components/Add/Additem";
import Itemlist from "./Components/Item/Itemlist";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardshow: false,
      clickitem: "",
      additem: false
    };
  }
  clicked = e => {
    console.log("clicked", e.target.id);
    this.setState({
      cardshow: true,
      clickitem: e.target.id
    });
  };
  resetclick = () => {
    this.setState({
      cardshow: false,
      clickitem: "",
      additem: false
    });
  };
  additemfun = () => {
    this.setState({ additem: true });
  };

  show1model = () => {
    return (
      <div>
        <Itemlist clicke={this.clicked} />
      </div>
    );
  };
  goback = () => {
    return (
      <div>
        <button className="tl pa3 br3" onClick={this.resetclick}>
          Go Back
        </button>
      </div>
    );
  };

  show1model2 = () => {
    return (
      <div>
        <Cardshow item={this.state.clickitem} />
      </div>
    );
  };

  render() {
    return (
      <div>
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container">
            <h1>Welcome to Countapp User</h1>
            <div>
              {this.state.additem || this.state.cardshow ? this.goback() : null}
            </div>
            <div className="tr pa3">
              <button onClick={this.resetclick}> Logout</button>
            </div>
          </div>
        </nav>
        <div className="container mt6">
          {this.state.cardshow === false ? (
            [
              this.state.additem === false ? (
                <div>
                  {this.show1model()}
                  <button onClick={this.additemfun}>Additem</button>
                </div>
              ) : (
                <div>
                  <Additem itemadded={this.resetclick} />
                </div>
              )
            ]
          ) : (
            <div>{this.show1model2()}</div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
